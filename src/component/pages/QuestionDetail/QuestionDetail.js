import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import RelatedQuestion from '../HomePage/RelatedQuestion'
import NumberAchievement from '../NumberAchievement'
import TrendingTags from '../TrendingTags'
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom'
 
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));


export default function QuestionDetail() {

  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const navigate = useNavigate(); 

  const handleNavigate = () => {
      navigate('/ask');
    }

  return (
    <> 
      <section className="hero-area bg-white shadow-sm overflow-hidden pt-40px pb-40px">
        <span className="stroke-shape stroke-shape-1" />
        <span className="stroke-shape stroke-shape-2" />
        <span className="stroke-shape stroke-shape-3" />
        <span className="stroke-shape stroke-shape-4" />
        <span className="stroke-shape stroke-shape-5" />
        <span className="stroke-shape stroke-shape-6" />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9">
              <div className="hero-content">
                <h2 className="section-title pb-2 fs-24 lh-34">
                  Find the best answer to your technical question, <br />
                  help others answer theirs
                </h2>
                <p className="lh-26">
                  If you are going to use a passage of Lorem Ipsum, you need to be
                  sure there
                  <br /> isn't anything embarrassing hidden in the middle of text.
                </p>
                <ul className="generic-list-item pt-3">
                  <li>
                    <span className="icon-element icon-element-xs shadow-sm d-inline-block mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20px"
                        viewBox="0 0 24 24"
                        width="20px"
                        fill="#6c727c"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" />
                      </svg>
                    </span>{" "}
                    Anybody can ask a question
                  </li>
                  <li>
                    <span className="icon-element icon-element-xs shadow-sm d-inline-block mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20px"
                        viewBox="0 0 24 24"
                        width="20px"
                        fill="#6c727c"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                      </svg>
                    </span>{" "}
                    Anybody can answer
                  </li>
                  <li>
                    <span className="icon-element icon-element-xs shadow-sm d-inline-block mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20px"
                        viewBox="0 0 320 512"
                        width="20px"
                      >
                        <path
                          fill="#6c727c"
                          d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"
                        />
                      </svg>
                    </span>{" "}
                    The best answers are voted up and rise to the top
                  </li>
                </ul>
              </div>
              {/* end hero-content */}
            </div>
            {/* end col-lg-9 */}
            <div className="col-lg-3">
              <div className="hero-btn-box text-right py-3">
                <a style={{ color: "white" }} onClick={handleNavigate} className="btn theme-btn">
                  Ask a Question
                </a>
              </div>
            </div>
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>
      <section className="question-area pt-40px pb-40px">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="question-main-bar mb-50px">
                <div className="question-highlight">
                  <div className="media media-card shadow-none rounded-0 mb-0 bg-transparent p-0">
                    <div className="media-body">
                      <h5 className="fs-20">
                        <a href="question-details.html">
                          Unable to get data attribute from button element via
                          Jquery
                        </a>
                      </h5>
                      <div className="meta d-flex flex-wrap align-items-center fs-13 lh-20 py-1">
                        <div className="pr-3">
                          <span>Asked</span>
                          <span className="text-black">1 hour ago</span>
                        </div>
                        <div className="pr-3">
                          <span className="pr-1">Active</span>
                          <a href="#" className="text-black">
                            19 days ago
                          </a>
                        </div>
                        <div className="pr-3">
                          <span className="pr-1">Viewed</span>
                          <span className="text-black">89 times</span>
                        </div>
                      </div>
                      <div className="tags">
                        <a href="#" className="tag-link">
                          javascript
                        </a>
                        <a href="#" className="tag-link">
                          jquery
                        </a>
                        <a href="#" className="tag-link">
                          attribute
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* end media */}
                </div>
                {/* end question-highlight */}
                <div className="question d-flex">
                  <div className="votes votes-styled w-auto">
                    <div id="vote" className="upvotejs">
                      <a
                        className="upvote upvote-on"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="This question is useful"
                      />
                      <span className="count">1</span>
                      <a
                        className="downvote"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="This question is not useful"
                      />
                      <a
                        className="star"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Bookmark this question."
                      />
                    </div>
                  </div>
                  {/* end votes */}
                  <div className="question-post-body-wrap flex-grow-1">
                    <div className="question-post-body">
                      <p>
                        I'm not able to get the data attribute from a button
                        element.
                      </p>
                      <pre className="code-block custom-scrollbar-styled">
                        <code>
                          &lt;button{"\n"} <span className="code-attr">class</span>=
                          <span className="code-string">
                            "btn btn-solid navigate"
                          </span>
                          {"\n"} <span className="code-attr">value</span>=
                          <span className="code-string">"2"</span>
                          {"\n"} <span className="code-attr">data-productId</span>=
                          {"{"}
                          {"{"}$product-&gt;id{"}"}
                          {"}"}
                          {"\n"} <span className="code-attr">id</span>=
                          <span className="code-string">"size-click"</span>
                          {"\n"} &gt;{"\n"} Next{"\n"}&lt;/button&gt;{"\n"}
                        </code>
                      </pre>
                      <p>Then I attempt to get it like so:</p>
                      <pre className="code-block custom-scrollbar-styled">
                        <code>
                          $(<span className="code-string">"#size-click"</span>
                          ).click(<span className="code-function">() =&gt;</span>{" "}
                          {"{"}
                          {"\n"} <span className="code-keyword">let</span> width =
                          $(<span className="code-string">"#prod-width"</span>
                          ).val();{"\n"} <span className="code-keyword">let</span>{" "}
                          height = $(
                          <span className="code-string">"#prod-height"</span>
                          ).val();{"\n"} <span className="code-keyword">var</span>{" "}
                          prodId = $(<span className="code-built-in">this</span>
                          ).data(<span className="code-string">"productId"</span>);
                          {"\n"}
                          {"\n"} <span className="code-built-in">console</span>.log(
                          <span className="code-string">'this is prodId'</span>);
                          {"\n"} <span className="code-built-in">console</span>
                          .log(prodId);{"\n"}
                          {"\n"} <span className="code-keyword">const</span> data ={" "}
                          {"{"}
                          {"\n"}
                          {"      "}
                          <span className="code-attr">prodId</span>: prodId,{"\n"}
                          {"      "}
                          <span className="code-attr">step</span>:{" "}
                          <span className="code-string">'Size'</span>,{"\n"}
                          {"      "}
                          <span className="code-attr">width</span>: width,{"\n"}
                          {"      "}
                          <span className="code-attr">height</span>: height,{"\n"}
                          {"    "}
                          {"}"}
                          {"\n"}
                          {"\n"}
                          {"    "}postDataEstimate(data);{"\n"}
                          {"\n"}
                          {"  "}
                          {"}"}){"\n"}
                        </code>
                      </pre>
                      <p>I'm also trying this:</p>
                      <pre className="code-block custom-scrollbar-styled">
                        <code>
                          <span className="code-keyword">var</span> prodId = $(
                          <span className="code-built-in">this</span>).attr(
                          <span className="code-string">'data-productId'</span>);
                          {"\n"}
                        </code>
                      </pre>
                      <p>Can you let me know what I'm missing?</p>
                    </div>
                    {/* end question-post-body */}
                    <div className="question-post-user-action">
                      <div className="media media-card user-media owner align-items-center">
                        <a href="user-profile.html" className="media-img d-block">
                          <img src="assets/images/img3.jpg" alt="avatar" />
                        </a>
                        <div className="media-body d-flex flex-wrap align-items-center justify-content-between">
                          <div>
                            <h5 className="pb-1">
                              <a href="user-profile.html">Arden Smith</a>
                            </h5>
                            <div className="stats fs-12 d-flex align-items-center lh-18">
                              <span className="text-black pr-2">224,110</span>
                              <span className="pr-2 d-inline-flex align-items-center">
                                <span className="ball gold" />
                                16
                              </span>
                              <span className="pr-2 d-inline-flex align-items-center">
                                <span className="ball silver" />
                                93
                              </span>
                              <span className="pr-2 d-inline-flex align-items-center">
                                <span className="ball" />
                                136
                              </span>
                            </div>
                          </div>
                          <small className="meta d-block text-right">
                            <span className="text-black d-block lh-18">asked</span>
                            <span className="d-block lh-18 fs-12">6 hours ago</span>
                          </small>
                        </div>
                      </div>
                      <div className="media media-card user-media align-items-center">
                        <a href="user-profile.html" className="media-img d-block">
                          <img src="assets/images/img4.jpg" alt="avatar" />
                        </a>
                        <div className="media-body d-flex flex-wrap align-items-center justify-content-between">
                          <div>
                            <h5 className="pb-1">
                              <a href="user-profile.html">Kevin Martin</a>
                            </h5>
                            <div className="stats fs-12 d-flex align-items-center lh-18">
                              <span className="text-black pr-2">6,514</span>
                              <span className="pr-2 d-inline-flex align-items-center">
                                <span className="ball gold" />3
                              </span>
                              <span className="pr-2 d-inline-flex align-items-center">
                                <span className="ball silver" />
                                35
                              </span>
                              <span className="pr-2 d-inline-flex align-items-center">
                                <span className="ball" />
                                48
                              </span>
                            </div>
                          </div>
                          <a
                            href="revisions.html"
                            className="meta d-block text-right fs-13 text-color"
                          >
                            <span className="d-block lh-18">edited</span>
                            <span className="d-block lh-18 fs-12">6 hours ago</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="comments-wrap">
                      <ul className="comments-list">
                        <li>
                          <div className="comment-actions">
                            <span className="comment-score">1</span>
                          </div>
                          <div className="comment-body">
                            <span className="comment-copy">
                              Where are you trying to get{" "}
                              <code className="code">prodId</code>?
                            </span>
                            <span className="comment-separated">-</span>
                            <a
                              href="user-profile.html"
                              className="comment-user"
                              title="15,467 reputation"
                            >
                              Majed Badawi
                            </a>
                            <span className="comment-separated">-</span>
                            <a href="#" className="comment-date">
                              8 hours ago
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="comment-actions">
                            <span className="comment-score" />
                          </div>
                          <div className="comment-body">
                            <span className="comment-copy">
                              In a separate js file. @MajedBadawi
                            </span>
                            <span className="comment-separated">-</span>
                            <a
                              href="user-profile.html"
                              className="comment-user owner"
                              title="224,110 reputation"
                            >
                              Arden Smith
                            </a>
                            <span className="comment-separated">-</span>
                            <a href="#" className="comment-date">
                              8 hours ago
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="comment-actions">
                            <span className="comment-score" />
                          </div>
                          <div className="comment-body">
                            <span className="comment-copy">
                              @MajedBadawi I just updated the code to show where I'm
                              trying to get it.
                            </span>
                            <span className="comment-separated">-</span>
                            <a
                              href="user-profile.html"
                              className="comment-user owner"
                              title="224,110 reputation"
                            >
                              Arden Smith
                            </a>
                            <span className="comment-separated">-</span>
                            <a href="#" className="comment-date">
                              8 hours ago
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="comment-actions">
                            <span className="comment-score" />
                          </div>
                          <div className="comment-body">
                            <span className="comment-copy">
                              Your are missing quotes{" "}
                              <code className="code">
                                data-productId={"{"}
                                {"{"}$product-&gt;id{"}"}
                                {"}"}
                              </code>{" "}
                              Your markup breaks after that
                            </span>
                            <span className="comment-separated">-</span>
                            <a
                              href="user-profile.html"
                              className="comment-user"
                              title="6,514 reputation"
                            >
                              Kevin Martin
                            </a>
                            <span className="comment-separated">-</span>
                            <a href="#" className="comment-date">
                              8 hours ago
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="comment-actions">
                            <span className="comment-score" />
                          </div>
                          <div className="comment-body">
                            <span className="comment-copy">
                              This doesn't work either:{" "}
                              <code className="code">
                                data-productId="{"{"}
                                {"{"}$product-&gt;id{"}"}
                                {"}"}"
                              </code>
                              . @Kevin Martin
                            </span>
                            <span className="comment-separated">-</span>
                            <a
                              href="user-profile.html"
                              className="comment-user owner"
                              title="224,110 reputation"
                            >
                              Arden Smith
                            </a>
                            <span className="comment-separated">-</span>
                            <a href="#" className="comment-date">
                              8 hours ago
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* end comments-wrap */}
                  </div>
                  {/* end question-post-body-wrap */}
                </div>
                {/* end question */}
                <div className="subheader d-flex align-items-center justify-content-between">
                  <div className="subheader-title">
                    <h3 className="fs-16">1 Answer</h3>
                  </div>
                  {/* end subheader-title */}
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
                      <option value={2}>Active</option>
                      <option value={3}>oldest</option>

                    </Select>
                  </FormControl>
                  {/* end subheader-actions */}
                </div>
                {/* end subheader */}
                <div className="answer-wrap d-flex">
                  <div className="votes votes-styled w-auto">
                    <div id="vote2" className="upvotejs">
                      <a
                        className="upvote upvote-on"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="This question is useful"
                      />
                      <span className="count">2</span>
                      <a
                        className="downvote"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="This question is not useful"
                      />
                      <a
                        className="star check star-on"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="The question owner accepted this answer"
                      />
                    </div>
                  </div>
                  {/* end votes */}
                  <div className="answer-body-wrap flex-grow-1">
                    <div className="answer-body">
                      <p>
                        Since you're using an{" "}
                        <code className="code">arrow-function</code>,{" "}
                        <code className="code">this</code> does not refer to the{" "}
                        <code className="code">button</code>:
                      </p>
                      <pre className="code-block custom-scrollbar-styled">
                        <code>
                          $(<span className="code-string">"#size-click"</span>
                          ).click(
                          <span className="code-function">
                            <span className="code-keyword">function</span>(){" "}
                          </span>
                          {"{"}
                          {"\n"}
                          {"  "}
                          <span className="code-keyword">var</span> prodId = $(
                          <span className="code-built-in">this</span>).attr(
                          <span className="code-string">"data-productId"</span>);
                          {"\n"}
                          {"  "}
                          <span className="code-built-in">console</span>.log(
                          <span className="code-string">'this is prodId'</span>);
                          {"\n"}
                          {"  "}
                          <span className="code-built-in">console</span>
                          .log(prodId);{"\n"}
                          {"}"});
                        </code>
                      </pre>
                      <pre className="code-block custom-scrollbar-styled">
                        <code>
                          <span className="code-tag">
                            &lt;<span className="code-name">script</span>{" "}
                            <span className="code-attr">src</span>=
                            <span className="code-string">
                              "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"
                            </span>
                            &gt;
                          </span>
                          <span className="code-tag">
                            &lt;/<span className="code-name">script</span>&gt;
                          </span>
                          {"\n"}
                          {"\n"}
                          <span className="code-tag">
                            &lt;<span className="code-name">button</span>
                            {"\n"}
                            {"  "}
                            <span className="code-attr">class</span>=
                            <span className="code-string">
                              "btn btn-solid navigate"
                            </span>
                            {"\n"}
                            {"  "}
                            <span className="code-attr">value</span>=
                            <span className="code-string">"2"</span>
                            {"\n"}
                            {"  "}
                            <span className="code-attr">data-productId</span>=
                            <span className="code-string">"1"</span>
                            {"\n"}
                            {"  "}
                            <span className="code-attr">id</span>=
                            <span className="code-string">"size-click"</span>
                            {"\n"}&gt;
                          </span>
                          Next
                          <span className="code-tag">
                            &lt;/<span className="code-name">button</span>&gt;
                          </span>
                        </code>
                      </pre>
                      <p>
                        If you still want to use it, you can use the{" "}
                        <code className="code">event</code> passed to the function:
                      </p>
                      <pre className="code-block custom-scrollbar-styled">
                        <code>
                          $(<span className="code-string">"#size-click"</span>
                          ).click(
                          <span className="code-function">
                            <span className="code-params">e</span> =&gt;
                          </span>{" "}
                          {"{"}
                          {"\n"}
                          {"  "}
                          <span className="code-keyword">var</span> prodId =
                          $(e.currentTarget).attr(
                          <span className="code-string">"data-productId"</span>);
                          {"\n"}
                          {"  "}
                          <span className="code-built-in">console</span>.log(
                          <span className="code-string">'this is prodId'</span>);
                          {"\n"}
                          {"  "}
                          <span className="code-built-in">console</span>
                          .log(prodId);{"\n"}
                          {"}"});
                        </code>
                      </pre>
                      <pre className="code-block custom-scrollbar-styled">
                        <code>
                          <span className="code-tag">
                            &lt;<span className="code-name">script</span>{" "}
                            <span className="code-attr">src</span>=
                            <span className="code-string">
                              "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"
                            </span>
                            &gt;
                          </span>
                          <span className="code-tag">
                            &lt;/<span className="code-name">script</span>&gt;
                          </span>
                          {"\n"}
                          {"\n"}
                          <span className="code-tag">
                            &lt;<span className="code-name">button</span>
                            {"\n"}
                            {"  "}
                            <span className="code-attr">class</span>=
                            <span className="code-string">
                              "btn btn-solid navigate"
                            </span>
                            {"\n"}
                            {"  "}
                            <span className="code-attr">value</span>=
                            <span className="code-string">"2"</span>
                            {"\n"}
                            {"  "}
                            <span className="code-attr">data-productId</span>=
                            <span className="code-string">"1"</span>
                            {"\n"}
                            {"  "}
                            <span className="code-attr">id</span>=
                            <span className="code-string">"size-click"</span>
                            {"\n"}&gt;
                          </span>
                          Next
                          <span className="code-tag">
                            &lt;/<span className="code-name">button</span>&gt;
                          </span>
                        </code>
                      </pre>
                    </div>
                    {/* end answer-body */}
                    <div className="question-post-user-action">

                      {/* end post-menu */}
                      <div className="media media-card user-media align-items-center">
                        <a href="user-profile.html" className="media-img d-block">
                          <img src="assets/images/img4.jpg" alt="avatar" />
                        </a>
                        <div className="media-body d-flex align-items-center justify-content-between">
                          <div>
                            <h5 className="pb-1">
                              <a href="user-profile.html">Majed Badawi</a>
                            </h5>
                            <div className="stats fs-12 d-flex align-items-center lh-18">
                              <span className="text-black pr-2">15.5k</span>
                              <span className="pr-2 d-inline-flex align-items-center">
                                <span className="ball gold" />3
                              </span>
                              <span className="pr-2 d-inline-flex align-items-center">
                                <span className="ball silver" />
                                10
                              </span>
                              <span className="pr-2 d-inline-flex align-items-center">
                                <span className="ball" />
                                26
                              </span>
                            </div>
                          </div>
                          <small className="meta d-block text-right">
                            <span className="text-black d-block lh-18">
                              answered
                            </span>
                            <span className="d-block lh-18 fs-12">8 hours ago</span>
                          </small>
                        </div>
                      </div>
                      {/* end media */}
                      <div className="media media-card user-media align-items-center">
                        <div className="media-body d-flex align-items-center justify-content-end">
                          <a
                            href="revisions.html"
                            className="meta d-block text-right fs-13 text-color"
                          >
                            <span className="d-block lh-18">edited</span>
                            <span className="d-block lh-18 fs-12">8 hours ago</span>
                          </a>
                        </div>
                      </div>
                      {/* end media */}
                    </div>
                    {/* end question-post-user-action */}
                    <div className="comments-wrap">
                      <ul className="comments-list">
                        <li>
                          <div className="comment-actions">
                            <span className="comment-score">1</span>
                          </div>
                          <div className="comment-body">
                            <span className="comment-copy">
                              Ah excellent! Thank you!
                            </span>
                            <span className="comment-separated">-</span>
                            <a
                              href="user-profile.html"
                              className="comment-user owner"
                              title="224,110 reputation"
                            >
                              Arden Smith
                            </a>
                            <span className="comment-separated">-</span>
                            <a href="#" className="comment-date">
                              8 hours ago
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* end answer-wrap */}
                <div className="subheader">
                  <div className="subheader-title">
                    <h3 className="fs-16">Your Answer</h3>
                  </div>
                  {/* end subheader-title */}
                </div>
                {/* end subheader */}
                <div className="post-form">
                  <form method="post" className="pt-3">
                    <div className="input-box">
                      <label className="fs-14 text-black lh-20 fw-medium">
                        Body
                      </label>
                      <div className="form-group">
                        <textarea
                          className="form-control form--control form-control-sm fs-13 user-text-editor"
                          name="message"
                          rows={6}
                          placeholder="Your answer here..."
                          defaultValue={"Your answer here..."}
                        />
                      </div>
                    </div>
                    <div className="input-box">
                      <label className="fs-14 text-black fw-medium">Image</label>
                      <div className="form-group">
                        <div className="file-upload-wrap file-upload-layout-2">
                          <input
                            type="file"
                            name="files[]"
                            className="file-upload-input"
                            multiple=""
                          />
                          <span className="file-upload-text d-flex align-items-center justify-content-center">
                            <i className="la la-cloud-upload mr-2 fs-24" />
                            Drop files here or click to upload.
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* end input-box */}
                    <button className="btn theme-btn theme-btn-sm" type="submit">
                      Post Your Answer
                    </button>
                  </form>
                </div>
              </div>
              {/* end question-main-bar */}
            </div>
            {/* end col-lg-9 */}
            <div className="col-lg-3">
              <div className="sidebar">
                <NumberAchievement />
                {/* end card */}
                <div className="card card-item">
                  <div className="card-body">
                    <div className="d-flex align-items-center pb-3">
                      <svg
                        className="mr-2"
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="#6c727c"
                      >
                        <path d="M1 6l8 5 8-5V4L9 9 1 4c0-1.1.9-2 2-2h12c1.09 0 2 .91 2 2v10c0 1.09-.91 2-2 2H3c-1.09 0-2-.91-2-2V6z" />
                      </svg>
                      <h3 className="fs-17">Love this site?</h3>
                    </div>
                    <div className="divider">
                      <span />
                    </div>
                    <p className="fs-14 lh-20 py-3">
                      Get the{" "}
                      <span className="text-dark fw-medium">
                        weekly newsletter!
                      </span>{" "}
                      In it, you'll get:
                    </p>
                    <ul className="generic-list-item generic-list-item-bullet fs-14 pb-3">
                      <li className="lh-20">
                        The week's top questions and answers
                      </li>
                      <li className="lh-20">Important community announcements</li>
                      <li className="lh-20">Questions that need answers</li>
                    </ul>
                    <button className="btn theme-btn theme-btn-gray w-100">
                      Sign up for the digest
                    </button>
                    <p className="fs-14 pt-1 text-center">
                      See an example newsletter
                    </p>
                  </div>
                </div>
                {/* end card */}
                <div className="card card-item">
                  <div className="card-body">
                    <h3 className="fs-17 pb-3">Related Questions</h3>
                    <div className="divider">
                      <span />
                    </div>
                    <RelatedQuestion />
                  </div>
                </div>
                {/* end card */}
                <TrendingTags />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
