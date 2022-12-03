import React from "react";
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

import { makeStyles, withStyles } from '@material-ui/core/styles';



const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));
function UserActivity() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div
      className="tab-pane fade"
      id="user-activity"
      role="tabpanel"
      aria-labelledby="user-activity-tab"
    >
      <div className="user-panel-main-bar">
        <div className="user-panel mb-40px">
          <div className="bg-gray p-3 rounded-rounded mb-3">
            <h3 className="fs-17">Reputation</h3>
          </div>
          <div className="media media-card align-items-center shadow-none border border-gray p-3 text-center">
            <div className="media-body">
              <h5 className="fw-medium">224,110</h5>
              <p className="fs-15">top 0.01% overall</p>
            </div>
          </div>
          <div className="user-stats d-flex flex-wrap align-items-center">
            <div className="stat flex-grow-1 my-1">
              <h4 className="fs-15 text-gray pb-2">Next tag badge:</h4>
              <span className="badge badge-md badge-gray">
                <span className="ball" /> function-pointers
              </span>
            </div>
            <div className="stat text-center mr-3 my-1">
              <small className="d-block lh-15 pb-1">
                149/100 score
              </small>
              <div className="progress progress-slim bg-gray-2">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "100%" }}
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            <div className="stat text-center ml-0 my-1">
              <small className="d-block lh-15 pb-1">
                19/20 answers
              </small>
              <div className="progress progress-slim bg-gray-2">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "95%" }}
                  aria-valuenow={95}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
          </div>
        </div>
        {/* end user-panel */}
        <div className="user-panel mb-40px">
          <div className="bg-gray p-3 rounded-rounded mb-3">
            <h3 className="fs-17">Badges</h3>
          </div>
          <div className="badge-stats d-flex align-items-center mb-4 text-center">
            <div className="stat flex-grow-1">
              <span
                className="badge d-block mr-2 badge-md badge-gold"
                title="Gold"
              >
                <span className="ball gold" /> 91
              </span>
            </div>
            <div className="stat flex-grow-1">
              <span
                className="badge d-block mr-2 badge-md badge-gray"
                title="Silver"
              >
                <span className="ball silver" /> 560
              </span>
            </div>
            <div className="stat flex-grow-1">
              <span
                className="badge d-block badge-md badge-bronze"
                title="Bronze"
              >
                <span className="ball" /> 632
              </span>
            </div>
          </div>
          {/* end badge-stats */}
          <div className="user-stats d-flex align-items-center">
            <div className="stat flex-grow-1">
              <h4 className="fs-15 text-gray pb-2">Newest</h4>
              <a href="#" className="badge badge-md badge-dark">
                <span className="ball silver" /> Good Answer
              </a>
            </div>
            <div className="stat flex-grow-1">
              <div className="d-flex align-items-center justify-content-between pb-2">
                <h4 className="fs-15 text-gray">Next badge</h4>
                <span className="count fs-14">72/80</span>
              </div>
              <div className="progress progress-fat">
                <div
                  className="progress-bar bg-gray-2"
                  role="progressbar"
                  style={{ width: "90%" }}
                  aria-valuenow={90}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <span className="text-black">Deputy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end user-panel */}
        <div className="user-panel mb-10px">
          <div className="bg-gray p-3 rounded-rounded mb-3">
            <h3 className="fs-17">Impact</h3>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="media media-card align-items-center shadow-none border border-gray p-3 text-center">
                <div className="media-body">
                  <h5 className="fw-medium">~46.3m</h5>
                  <p className="fs-15">people reached</p>
                </div>
              </div>
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3">
              <div className="media media-card align-items-center shadow-none border border-gray p-3 text-center">
                <div className="media-body">
                  <h5 className="fw-medium">122</h5>
                  <p className="fs-15">posts edited</p>
                </div>
              </div>
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3">
              <div className="media media-card align-items-center shadow-none border border-gray p-3 text-center">
                <div className="media-body">
                  <h5 className="fw-medium">72</h5>
                  <p className="fs-15">helpful flags</p>
                </div>
              </div>
            </div>

          </div>
          {/* end row */}
        </div>
        {/* end user-panel */}
        <div className="user-panel mb-40px">
          <div className="bg-gray p-3 rounded-rounded">
            <div className="filter-option-box w-20">
              <select className="select-container">
                <option value="summary" selected="">
                  Summary
                </option>
                <option value="answers">Answers</option>
                <option value="questions">Questions</option>
                <option value="tags">Tags</option>
                <option value="badges">Badges</option>
                <option value="bookmarks">Bookmarks</option>
                <option value="bounties">Bounties</option>
                <option value="reputation">Reputation</option>
                <option value="activity">All actions</option>
              </select>
            </div>
          </div>
          <div className="summary-panel">
            <div className="border-bottom border-bottom-gray p-3 d-flex align-items-center justify-content-between">
              <h4 className="fs-15 fw-regular">
                Answers <span>(1,979)</span>
              </h4>
              <FormControl variant="outlined" size="small" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">Order by</InputLabel>
                <Select style={{ paddingRight: "24px" }}
                  native
                  // value={state.age}
                  onChange={handleChange}
                  label="Newest"
                  inputProps={{
                    name: 'Newest',
                    id: 'outlined-age-native-simple',
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={1}>votes</option>
                  <option value={2}>Activity</option>
                  <option value={3}>Newest</option>

                </Select>
              </FormControl>
            </div>
            <div className="vertical-list">
              <div className="item post p-0">
                <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                  <div className="votes answered-accepted">
                    <div className="vote-block" title="Votes">
                      <span className="vote-counts">999k</span>
                    </div>
                  </div>
                  <div className="media-body">
                    <h5 className="fs-15">
                      <a href="question-details.html">
                        How to make Git “forget” about a file that was
                        tracked but is now in .gitignore?
                      </a>
                    </h5>
                  </div>
                </div>
                {/* end media */}
              </div>
              {/* end item */}
              <div className="item post p-0">
                <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                  <div className="votes answered-accepted">
                    <div className="vote-block" title="Votes">
                      <span className="vote-counts">4714</span>
                    </div>
                  </div>
                  <div className="media-body">
                    <h5 className="fs-15">
                      <a href="question-details.html">
                        Undoing a git rebase
                      </a>
                    </h5>
                  </div>
                </div>
                {/* end media */}
              </div>
              {/* end item */}
              <div className="item post p-0">
                <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                  <div className="votes answered-accepted">
                    <div className="vote-block" title="Votes">
                      <span className="vote-counts">4448</span>
                    </div>
                  </div>
                  <div className="media-body">
                    <h5 className="fs-15">
                      <a href="question-details.html">
                        Difference between “git add -A” and “git add .”
                      </a>
                    </h5>
                  </div>
                </div>
                {/* end media */}
              </div>
              <div className="pager pt-30px">
                <nav aria-label="Page navigation example">
                  <ul className="pagination generic-pagination generic--pagination">
                    <li className="page-item">
                      <a
                        className="page-link"
                        href="#"
                        aria-label="Previous"
                      >
                        <span aria-hidden="true">
                          <i className="la la-arrow-left" />
                        </span>
                        <span className="sr-only">Previous</span>
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        4
                      </a>
                    </li>
                    <li className="page-item">
                      <a
                        className="page-link"
                        href="#"
                        aria-label="Next"
                      >
                        <span aria-hidden="true">
                          <i className="la la-arrow-right" />
                        </span>
                        <span className="sr-only">Next</span>
                      </a>
                    </li>
                  </ul>
                </nav>
                <p className="fs-13 pt-2">
                  Showing 1-5 of (1,979) results
                </p>
              </div>
            </div>
          </div>
          {/* end summary-panel */}
        </div>
        {/* end user-panel */}
        <div className="user-panel mb-40px">
          <div className="bg-gray p-3 rounded-rounded d-flex align-items-center justify-content-between">
            <h3 className="fs-17">
              Questions <span>(50)</span>
            </h3>
            <FormControl variant="outlined" size="small" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">Order by</InputLabel>
                <Select style={{ paddingRight: "24px" }}
                  native
                  // value={state.age}
                  onChange={handleChange}
                  label="Newest"
                  inputProps={{
                    name: 'Newest',
                    id: 'outlined-age-native-simple',
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={1}>votes</option>
                  <option value={2}>Activity</option>
                  <option value={3}>Newest</option>

                </Select>
              </FormControl>
          </div>
          <div className="summary-panel">
            <div className="vertical-list">
              <div className="item post p-0">
                <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                  <div className="votes answered-accepted">
                    <div className="vote-block" title="Votes">
                      <span className="vote-counts">2653</span>
                    </div>
                  </div>
                  <div className="media-body">
                    <h5 className="fs-15">
                      <a href="question-details.html">
                        What are the correct version numbers for C#?
                      </a>
                    </h5>
                  </div>
                </div>
                {/* end media */}
              </div>
              {/* end item */}
              <div className="item post p-0">
                <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                  <div className="votes">
                    <div className="vote-block" title="Votes">
                      <span className="vote-counts">563</span>
                    </div>
                  </div>
                  <div className="media-body">
                    <h5 className="fs-15">
                      <a href="question-details.html">
                        Curious null-coalescing operator custom implicit
                        conversion behaviour
                      </a>
                    </h5>
                  </div>
                </div>
                {/* end media */}
              </div>
              {/* end item */}
              <div className="item post p-0">
                <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                  <div className="votes answered-accepted">
                    <div className="vote-block" title="Votes">
                      <span className="vote-counts">363</span>
                    </div>
                  </div>
                  <div className="media-body">
                    <h5 className="fs-15">
                      <a href="question-details.html">
                        What's your most controversial programming
                        opinion?
                      </a>
                    </h5>
                  </div>
                </div>
                {/* end media */}
              </div>
              {/* end item */}
              <div className="item post p-0">
                <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                  <div className="votes answered-accepted">
                    <div className="vote-block" title="Votes">
                      <span className="vote-counts">336</span>
                    </div>
                  </div>
                  <div className="media-body">
                    <h5 className="fs-15">
                      <a href="question-details.html">
                        Performance surprise with “as” and nullable
                        types
                      </a>
                    </h5>
                  </div>
                </div>
                {/* end media */}
              </div>
              {/* end item */}
              <div className="item post p-0">
                <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                  <div className="votes answered-accepted">
                    <div className="vote-block" title="Votes">
                      <span className="vote-counts">322</span>
                    </div>
                  </div>
                  <div className="media-body">
                    <h5 className="fs-15">
                      <a href="question-details.html">
                        What's the strangest corner case you've seen in
                        C# or .NET? [closed]
                      </a>
                    </h5>
                  </div>
                </div>
                {/* end media */}
              </div>
              {/* end item */}
              <div className="pager pt-30px">
                <nav aria-label="Page navigation example">
                  <ul className="pagination generic-pagination generic--pagination">
                    <li className="page-item">
                      <a
                        className="page-link"
                        href="#"
                        aria-label="Previous"
                      >
                        <span aria-hidden="true">
                          <i className="la la-arrow-left" />
                        </span>
                        <span className="sr-only">Previous</span>
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        4
                      </a>
                    </li>
                    <li className="page-item">
                      <a
                        className="page-link"
                        href="#"
                        aria-label="Next"
                      >
                        <span aria-hidden="true">
                          <i className="la la-arrow-right" />
                        </span>
                        <span className="sr-only">Next</span>
                      </a>
                    </li>
                  </ul>
                </nav>
                <p className="fs-13 pt-2">
                  Showing 1-5 of (50) results
                </p>
              </div>
            </div>
          </div>
          {/* end summary-panel */}
        </div>
        {/* end user-panel */}
        <div className="user-panel mb-40px">
          <div className="bg-gray p-3 rounded-rounded">
            <h3 className="fs-17">
              Tags <span>(4,654)</span>
            </h3>
          </div>
          <div className="summary-panel">
            <div className="vertical-list">
              <div className="item tags d-flex align-items-center">
                <span className="tag-stat mr-2 fs-14">146k</span>
                <div className="flex-grow-1">
                  <a
                    href="#"
                    className="tag-link tag-link-md tag-link-blue mb-0 lh-20"
                  >
                    java
                  </a>
                </div>
                <span className="item-multiplier fs-14">
                  <span>×</span>
                  <span>10512</span>
                </span>
              </div>
              {/* item */}
              <div className="item tags d-flex align-items-center">
                <span className="tag-stat mr-2 fs-14">89k</span>
                <div className="flex-grow-1">
                  <a
                    href="#"
                    className="tag-link tag-link-md tag-link-blue mb-0 lh-20"
                  >
                    .net
                  </a>
                </div>
                <span className="item-multiplier fs-14">
                  <span>×</span>
                  <span>5569</span>
                </span>
              </div>

              <div className="item tags d-flex align-items-center">
                <span className="tag-stat mr-2 fs-14">23k</span>
                <div className="flex-grow-1">
                  <a
                    href="#"
                    className="tag-link tag-link-md tag-link-blue mb-0 lh-20"
                  >
                    string
                  </a>
                </div>
                <span className="item-multiplier fs-14">
                  <span>×</span>
                  <span>999</span>
                </span>
              </div>
              {/* item */}
            </div>
          </div>
          {/* end summary-panel */}
        </div>
        {/* end user-panel */}
        <div className="user-panel mb-40px">
          <div className="bg-gray p-3 rounded-rounded d-flex align-items-center justify-content-between">
            <h3 className="fs-17">
              Badges <span>(765)</span>
            </h3>
            <FormControl variant="outlined" size="small" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">Order by</InputLabel>
                <Select style={{ paddingRight: "24px" }}
                  native
                  // value={state.age}
                  onChange={handleChange}
                  label="Newest"
                  inputProps={{
                    name: 'Newest',
                    id: 'outlined-age-native-simple',
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={1}>Recent</option>
                  <option value={2}>Class</option>
                  <option value={3}>Name</option>

                </Select>
              </FormControl>
          </div>
          <div className="summary-panel">
            <div className="vertical-list">
              <div className="item">
                <a
                  href="#"
                  className="badge badge-md badge-dark d-inline-flex align-items-center mr-1"
                >
                  <span className="ball silver" /> Good Answer
                </a>
                <span className="item-multiplier fs-14 fw-medium">
                  <span>×</span>
                  <span>4142</span>
                </span>
              </div>
              {/* item */}
              <div className="item">
                <a
                  href="#"
                  className="badge badge-md badge-dark d-inline-flex align-items-center mr-1"
                >
                  <span className="ball" /> Nice Answer
                </a>
                <span className="item-multiplier fs-14 fw-medium">
                  <span>×</span>
                  <span>586</span>
                </span>
              </div>
              {/* item */}
              <div className="item">
                <a
                  href="#"
                  className="badge badge-md badge-dark d-inline-flex align-items-center mr-1"
                >
                  <span className="ball gold" /> Great Answer
                </a>
                <span className="item-multiplier fs-14 fw-medium">
                  <span>×</span>
                  <span>1310</span>
                </span>
              </div>


            </div>
          </div>
          {/* end summary-panel */}
        </div>

        <div className="user-panel mb-40px">
          <div className="bg-gray p-3 rounded-rounded d-flex align-items-center justify-content-between">
            <h3 className="fs-17">
              Bookmarks <span>(12)</span>
            </h3>
            <FormControl variant="outlined" size="small" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">Order by</InputLabel>
                <Select style={{ paddingRight: "24px" }}
                  native
                  // value={state.age}
                  onChange={handleChange}
                  label="Newest"
                  inputProps={{
                    name: 'Newest',
                    id: 'outlined-age-native-simple',
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={1}>votes</option>
                  <option value={2}>Activity</option>
                  <option value={3}>Newest</option>
                  <option value={4}>Views</option>
                  <option value={5}>Added</option>

                </Select>
              </FormControl>
          </div>
          <div className="summary-panel">
            <div className="vertical-list">
              <div className="item post p-0">
                <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                  <div className="votes answered-accepted">
                    <div className="vote-block" title="Votes">
                      <span className="vote-counts">1203</span>
                    </div>
                  </div>
                  <div className="media-body">
                    <h5 className="fs-15">
                      <a href="question-details.html">
                        git: undo all working dir changes including new
                        files
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="item post p-0">
                <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                  <div className="votes answered-accepted">
                    <div className="vote-block" title="Votes">
                      <span className="vote-counts">76</span>
                    </div>
                  </div>
                  <div className="media-body">
                    <h5 className="fs-15">
                      <a href="question-details.html">
                        Detected package downgrade warning (dotnet core,
                        vs 2017)
                      </a>
                    </h5>
                  </div>
                </div>
                {/* end media */}
              </div>

              <div className="pager pt-30px">
                <nav aria-label="Page navigation example">
                  <ul className="pagination generic-pagination generic--pagination">
                    <li className="page-item">
                      <a
                        className="page-link"
                        href="#"
                        aria-label="Previous"
                      >
                        <span aria-hidden="true">
                          <i className="la la-arrow-left" />
                        </span>
                        <span className="sr-only">Previous</span>
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        4
                      </a>
                    </li>
                    <li className="page-item">
                      <a
                        className="page-link"
                        href="#"
                        aria-label="Next"
                      >
                        <span aria-hidden="true">
                          <i className="la la-arrow-right" />
                        </span>
                        <span className="sr-only">Next</span>
                      </a>
                    </li>
                  </ul>
                </nav>
                <p className="fs-13 pt-2">
                  Showing 1-5 of (12) results
                </p>
              </div>
            </div>
          </div>
          {/* end summary-panel */}
        </div>
        {/* end user-panel */}
        <div className="user-panel mb-40px">
          <div className="bg-gray p-3 rounded-rounded d-flex align-items-center justify-content-between">
            <h3 className="fs-17">
              Active bounties <span>(20)</span>
            </h3>
            <div className="filter-option-box flex-grow-1 d-flex align-items-center justify-content-end lh-1">
              <FormControl variant="outlined" size="small" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">Order by</InputLabel>
                <Select style={{ paddingRight: "24px" }}
                  native
                  // value={state.age}
                  onChange={handleChange}
                  label="Newest"
                  inputProps={{
                    name: 'Newest',
                    id: 'outlined-age-native-simple',
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={1}>Offered</option>
                  <option value={2}>Earned</option>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="summary-panel">
            <div className="vertical-list">
              <div className="item p-0">
                <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                  <div className="votes">
                    <div
                      className="vote-block d-flex align-items-center justify-content-between"
                      title="Votes"
                    >
                      <span className="vote-counts">6475</span>
                      <span className="vote-icon" />
                    </div>
                    <div
                      className="answer-block d-flex align-items-center justify-content-between"
                      title="Answers"
                    >
                      <span className="vote-counts">22</span>
                      <span className="answer-icon" />
                    </div>
                  </div>
                  <div className="media-body">
                    <h5>
                      <a
                        href="question-details.html"
                        className="d-flex align-items-center"
                      >
                        <span className="badge bg-12 mr-2 text-white">
                          +100
                        </span>{" "}
                        How to make Git “forget” about a file that was
                        tracked but is now in .gitignore?
                      </a>
                    </h5>
                    <small className="meta">
                      <span className="pr-1">yesterday</span>
                      <a href="#" className="author">
                        edublog
                      </a>
                    </small>
                    <div className="tags">
                      <a href="#" className="tag-link">
                        git
                      </a>
                      <a href="#" className="tag-link">
                        gitignore
                      </a>
                    </div>
                  </div>
                </div>
                {/* end media */}
              </div>
              {/* end item */}
              <div className="item p-0">
                <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                  <div className="votes answered-accepted">
                    <div
                      className="vote-block d-flex align-items-center justify-content-between"
                      title="Votes"
                    >
                      <span className="vote-counts">4711</span>
                      <span className="vote-icon" />
                    </div>
                    <div
                      className="answer-block d-flex align-items-center justify-content-between"
                      title="Answers"
                    >
                      <span className="vote-counts">-2</span>
                      <span className="answer-icon" />
                    </div>
                  </div>
                  <div className="media-body">
                    <h5>
                      <a
                        href="question-details.html"
                        className="d-flex align-items-center"
                      >
                        <span className="badge bg-12 mr-2 text-white">
                          +500
                        </span>{" "}
                        Catching errors being thrown within module
                      </a>
                    </h5>
                    <small className="meta">
                      <span className="pr-1">1 hour ago</span>
                      <a href="#" className="author">
                        edublog
                      </a>
                    </small>
                    <div className="tags">
                      <a href="#" className="tag-link">
                        python
                      </a>
                      <a href="#" className="tag-link">
                        error-handling
                      </a>
                      <a href="#" className="tag-link">
                        gevent
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default UserActivity;