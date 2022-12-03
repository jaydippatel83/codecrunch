import { faker } from "@faker-js/faker";
import PropTypes from "prop-types";
import { noCase } from "change-case";
import React, { useRef, useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom"; 
import { alpha } from "@mui/material/styles";
import {
  Box,
  List,
  Badge,
  Button,
  Avatar,
  Tooltip,
  Divider,
  IconButton,
  Typography,
  ListItemText,
  ListSubheader,
  ListItemAvatar,
  ListItemButton,
} from "@mui/material";
  
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { ethers } from "ethers";
import * as EpnsAPI from "@epnsproject/sdk-restapi";
import { toast } from "react-toastify";
import Scrollbar from "./Scrollbar";
import MenuPopover from "./MenuPopover";
import { LensAuthContext } from "./MainContext";
import { NotificationContext } from "./Notification";
// import { set, sub, formatDistanceToNow } from "date-fns";
 
// ----------------------------------------------------------------------


const NOTIFICATIONS = [
  {
    id: faker.datatype.uuid(),
    title: "Your order is placed",
    description: "waiting for shipping",
    avatar: null,
    type: "order_placed",
    createdAt:  null,
    isUnRead: true,
  },
  {
    id: faker.datatype.uuid(),
    title: faker.name.findName(),
    description: "answered to your comment on the Minimal",
    avatar: null,
    type: "friend_interactive",
    createdAt: null,
    isUnRead: true,
  },
  {
    id: faker.datatype.uuid(),
    title: "You have new message",
    description: "5 unread messages",
    avatar: null,
    type: "chat_message",
    createdAt: null,
    isUnRead: false,
  },
  {
    id: faker.datatype.uuid(),
    title: "You have new mail",
    description: "sent from Guido Padberg",
    avatar: null,
    type: "mail",
    createdAt: null,
    isUnRead: false,
  },
  {
    id: faker.datatype.uuid(),
    title: "Delivery processing",
    description: "Your order is being shipped",
    avatar: null,
    type: "order_shipped",
    createdAt: null,
    isUnRead: false,
  },
];

function renderContent(notification) {
  const title = (
    <Typography variant="subtitle2">
      {notification.title}
      <Typography
        component="span"
        variant="body2"
        sx={{ color: "text.secondary" }}
      >
        &nbsp; {noCase(notification.message)}
      </Typography>
    </Typography>
  );

  if (notification.type === "order_placed") {
    return {
      avatar: (
        <img
          alt={notification.title}
          src="assets/static/icons/ic_notification_package.svg"
        />
      ),
      title,
    };
  }
  if (notification.type === "order_shipped") {
    return {
      avatar: (
        <img
          alt={notification.title}
          src="assets/static/icons/ic_notification_shipping.svg"
        />
      ),
      title,
    };
  }
  if (notification.type === "mail") {
    return {
      avatar: (
        <img
          alt={notification.title}
          src="assets/static/icons/ic_notification_mail.svg"
        />
      ),
      title,
    };
  }
  if (notification.type === "chat_message") {
    return {
      avatar: (
        <img
          alt={notification.title}
          src="assets/static/icons/ic_notification_chat.svg"
        />
      ),
      title,
    };
  }
  return {
    avatar: <img alt={notification.title} src={notification.avatar} />,
    title,
  };
}

NotificationItem.propTypes = {
  notification: PropTypes.object.isRequired,
};

function NotificationItem({ notification }) {
  const { avatar, title, message } = renderContent(notification);

  return (
    <ListItemButton
      to="#"
      disableGutters
      component={RouterLink}
      sx={{
        py: 1.5,
        px: 2.5,
        mt: "1px",
      }}
    >
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: "background.neutral" }}>{avatar}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={title}
        secondary={
          <Typography
            variant="caption"
            sx={{
              mt: 0.5,
              display: "flex",
              alignItems: "center",
              color: "text.disabled",
            }}
          >
            {message}
          </Typography>
        }
      />
    </ListItemButton>
  );
}

export default function NotificationsPopover() {
  const anchorRef = useRef(null); 
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState(NOTIFICATIONS);
  const totalUnRead = notifications.filter(
    (item) => item.isUnRead === true
  ).length;
 

  const notificationContext = React.useContext(NotificationContext);
  const { fetchNotifications, notificationItems, isUpdated } =
    notificationContext;

    const lensAuthContext = React.useContext(LensAuthContext);
    const { login, loginCreate ,profile} = lensAuthContext;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMarkAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        isUnRead: false,
      }))
    );
  };

  const handleChennelSubs = async () => {
    const CHANNEL_PK = process.env.REACT_APP_PK; 
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    // const signer = new ethers.Wallet(CHANNEL_PK);

    
    const subs = await EpnsAPI.channels.subscribe({
      signer: signer,
      channelAddress: 'eip155:80001:0x11DfA2f073D303bAD0295df27a0F748290D39C5E', // channel address in CAIP
      userAddress: `eip155:80001:${profile.ownedBy}`, // user address in CAIP
      onSuccess: () => {
       toast.success('opt in success');
      },
      onError: () => {
        toast.error('opt in error');
      },
      env: 'staging'
    })
  }

  useEffect(() => {
    // EPNS
    fetchNotifications(profile.ownedBy);
  }, [profile.ownedBy, isUpdated]);

  return (
    <>
      <IconButton
        ref={anchorRef}
        size="small"
        color={open ? "primary" : "default"}
        onClick={handleOpen}
        className="mr-2"
        sx={{
          ...(open && {
            bgcolor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.focusOpacity
              ),
          }),
        }}
      >
        <Badge badgeContent={notificationItems.length} color="error">
          {/* <Iconify icon="eva:bell-fill" width={20} height={20} /> */}
          <NotificationsActiveIcon/>
        </Badge>
      </IconButton>

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ width: 360 }}
      >
        <Box sx={{ display: "flex", alignItems: "center", py: 2, px: 2.5 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle1">Notifications</Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              You have {notificationItems.length} Notifications
            </Typography>
          </Box>

          {totalUnRead > 0 && (
            <Tooltip title=" Mark all as read">
              <IconButton color="primary" onClick={handleMarkAllAsRead}>
                {/* <Iconify icon="eva:done-all-fill" width={20} height={20} /> */}
              </IconButton>
            </Tooltip>
          )}
          {totalUnRead > 0 && (
            <Tooltip title="Enable Notification">
              <Button color="primary" onClick={handleChennelSubs}>
                Opt-In
              </Button>
            </Tooltip>
          )}
        </Box>

        <Divider />

        <Scrollbar style={{ height: "300px", overflow: "scroll" }}>
          <List
            disablePadding
            subheader={
              <ListSubheader
                disableSticky
                sx={{ py: 1, px: 2.5, typography: "overline" }}
              >
                New
              </ListSubheader>
            }
          >
            {notificationItems.length > 0 &&
              notificationItems.slice(0, 10).map((notifi, index) => (
                <NotificationItem
                  key={index}
                  notification={{
                    avatar: notifi?.image,
                    title: notifi?.notification.title,
                    message: notifi?.notification.body,
                  }}
                />
              ))}
          </List>
        </Scrollbar>
        <Divider />
        <Box sx={{ p: 1 }}>
          <Button fullWidth disableRipple component={RouterLink} to="#">
            View All
          </Button>
        </Box>
      </MenuPopover>
    </>
  );
}
