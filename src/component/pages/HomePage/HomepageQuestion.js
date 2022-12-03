import React from "react"; 

 
import { useNavigate } from "react-router-dom";
import { LensAuthContext } from "../../../Context/MainContext";
import { useState } from "react";
import useInfiniteScroll from "../../useInfiniteScroll";
import { getPublicationByLatest } from "../../../lensprotocol/post/explore/explore-publications";
import moment from "moment";
import HomeQuestionCard from "./HomeQuestionCard";
import { FormControl, InputLabel, Select } from "@mui/material";



 

function HomePageQuestion() {
  const navigate = useNavigate(); 
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  
  const handleNavigateDetails = (id) => {
    // navigate('/question');
    navigate(`/question/${id}`)
  }

  const lensAuthContext = React.useContext(LensAuthContext);
  const { userPosts, update } = lensAuthContext;


  const [Items, setItems] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [page, setPage] = useState("{\"timestamp\":1,\"offset\":0}");
  const [HasMore, setHasMore] = useState(true);
  
  const [lastElementRef] = useInfiniteScroll(
    HasMore ? loadMoreItems : () => { },
    isFetching
  );
  React.useEffect(() => {
    loadMoreItems();
  }, [update])



  async function loadMoreItems() {
    setIsFetching(true);
    const results = await getPublicationByLatest(page).then((res) => {
      setItems((prevTitles) => {
        return [...new Set([...prevTitles, ...res.data.explorePublications.items.map((b) => b)])];
      });
      setPage(res.data.explorePublications.pageInfo.next);
      setHasMore(res.data.explorePublications.items.length > 0);
      setIsFetching(false);
    })
      .catch((e) => {
        console.log(e);
      });
  }
  


  return (
    <div
      className="tab-pane fade show active"
      id="questions"
      role="tabpanel"
      aria-labelledby="questions-tab"
    >
      <div className="filters d-flex align-items-center justify-content-between pb-4">
        <h3 className="fs-17 fw-medium">All Questions</h3>
        <div className="filter-option-box w-20">
          <FormControl variant="outlined" size="small" >
            <InputLabel htmlFor="outlined-age-native-simple">Newest</InputLabel>
            <Select
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
              <option value={1}>Newest</option>
              <option value={2}>Bountied</option>
              <option value={3}>Frequent</option>
              <option value={4}>Votes</option>
              <option value={5}>Unanswered</option>
              <option value={6}>Active</option>
            </Select>
          </FormControl>

        </div>
      </div>
      {
        Items && Items.map((item, i) => { 
          return (
            <HomeQuestionCard ref={lastElementRef} item={item} i={i}/>
          )
        })
      }

      <div className="pager d-flex flex-wrap align-items-center justify-content-between pt-30px">
        <div>
          <nav aria-label="Page navigation example">
            <ul className="pagination generic-pagination pr-1">
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
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">
                    <i className="la la-arrow-right" />
                  </span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
          <p className="fs-13 pt-3">
            Showing 1-15 results of 50,577 questions
          </p>
        </div>
        <FormControl variant="outlined" size="small">
          <InputLabel htmlFor="outlined-age-native-simple">10 per page</InputLabel>
          <Select
            native
            // value={state.age}
            onChange={handleChange}
            label="10 per page"
            inputProps={{
              name: '10 per page',
              id: 'outlined-age-native-simple',
            }}
          >
            <option aria-label="None" value="" />
            <option value={1}>10 per page</option>
            <option value={2}>15 per page</option>
            <option value={3}>20 per page</option>
            <option value={4}>30 per page</option>
            <option value={5}>40 per page</option>
            <option value={6}>50 per page</option>
          </Select>
        </FormControl>
      </div>
    </div>
  )
}

export default HomePageQuestion;