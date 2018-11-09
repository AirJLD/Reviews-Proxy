import React from 'react';

import moment from 'moment/src/moment';

import ReactPaginate from 'react-paginate';

import $ from 'jquery';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      offset: 0,
      pageCount: Math.ceil(this.props.data.length / 7),
    };
    this.text = '';
    this.rest = '';
    this.display = [];
    this.props = props;
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentDidMount() {
    this.loadComments();
  }

  loadComments() {
    let offset = this.state.offset;
    this.setState({
      data: this.props.data.slice(offset, offset + 7),
    });
  }

  handlePageClick(d) {
    const selected = d.selected;
    const off = Math.ceil(selected * 7);
    this.setState({ offset: off }, () => {
      this.loadComments();
    });
  }

  show(e) {
    e.target.parentNode.children[0].style.display = 'none';
    e.target.parentNode.children[1].style.display = 'none';
    e.target.parentNode.children[2].style.display = 'inline';
  }

  render() {
    return (
      <div>
        {
          this.state.data.sort((a, b) => {
            return new Date(a.review_time.slice(0, 10))
            - new Date(b.review_time.slice(0, 10));
          }).reverse().map((r, idx) => {
            const Long = () => (
              <div id="review_body">
                {r.review_body.slice(0, 250)}
                <span id="dot">...</span>
                <button
                  type="button"
                  className="readmore"
                  aria-busy="false"
                  onClick={this.show.bind(this)}
                >
                  Read more
                </button>
                <span id="rest">{r.review_body.slice(250 - r.review_body.length)}</span>
              </div>
            );
            const Short = () => (
              <div id="review_body">
                <p>
                  {r.review_body}
                </p>
              </div>
            );
            if (r.review_body.length > 250) {
              this.display[0] = <Long />;
            } else {
              this.display[0] = <Short />;
            }
            return (
              <div key={idx}>
                <div id="review_start">
                  <img src={r.avatarUrl} alt="" />
                  <div id="review_info">
                    <div id="reviewer_name">{r.name}</div>
                    <div id="review_time">
                      {moment(r.review_time.slice(0, 10)).format('MMMM')}
                      {' '}
                      {r.review_time.slice(0, 4)}
                    </div>
                  </div>
                  <div id="flag">
                    <svg viewBox="0 0 24 24" role="img" aria-label="Report" focusable="false"><path d="m22.39 5.8-.27-.64a207.86 207.86 0 0 0 -2.17-4.87.5.5 0 0 0 -.84-.11 7.23 7.23 0 0 1 -.41.44c-.34.34-.72.67-1.13.99-1.17.87-2.38 1.39-3.57 1.39-1.21 0-2-.13-3.31-.48l-.4-.11c-1.1-.29-1.82-.41-2.79-.41a6.35 6.35 0 0 0 -1.19.12c-.87.17-1.79.49-2.72.93-.48.23-.93.47-1.35.71l-.11.07-.17-.49a.5.5 0 1 0 -.94.33l7 20a .5.5 0 0 0 .94-.33l-2.99-8.53a21.75 21.75 0 0 1 1.77-.84c.73-.31 1.44-.56 2.1-.72.61-.16 1.16-.24 1.64-.24.87 0 1.52.11 2.54.38l.4.11c1.39.37 2.26.52 3.57.52 2.85 0 5.29-1.79 5.97-3.84a.5.5 0 0 0 0-.32c-.32-.97-.87-2.36-1.58-4.04zm-4.39 7.2c-1.21 0-2-.13-3.31-.48l-.4-.11c-1.1-.29-1.82-.41-2.79-.41-.57 0-1.2.09-1.89.27a16.01 16.01 0 0 0 -2.24.77c-.53.22-1.04.46-1.51.7l-.21.11-3.17-9.06c.08-.05.17-.1.28-.17.39-.23.82-.46 1.27-.67.86-.4 1.7-.7 2.48-.85.35-.06.68-.1.99-.1.87 0 1.52.11 2.54.38l.4.11c1.38.36 2.25.51 3.56.51 1.44 0 2.85-.6 4.18-1.6.43-.33.83-.67 1.18-1.02a227.9 227.9 0 0 1 1.85 4.18l.27.63c.67 1.57 1.17 2.86 1.49 3.79-.62 1.6-2.62 3.02-4.97 3.02z" fillRule="evenodd"></path></svg>
                  </div>
                </div>
                <div>
                  {this.display[0]}
                </div>
                <div id="dividing">
                  <div id="line"></div>
                </div>
              </div>
            );
          })}
        <ReactPaginate previousLabel={<Pre />}
          nextLabel={<Next />}
          breakLabel={<a id="dots">...</a>}
          breakClassName={"break-me"}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"} />
      </div>
    );
  }
}

const Pre = () => {
  return (
    <button type="button" className="_1ip5u88" aria-busy="false">
    <div className="_1yofwd5"><div className="_1rltvky">
    <svg id="pre_icon" viewBox="0 0 18 18" role="img" aria-label="Previous" focusable="false">
    <path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fillRule="evenodd">
    </path>
    </svg>
    </div>
    </div>
    </button>
  );
};

const Next = () => {
  return (
    <li className="_8wtxgiq">
    <button type="button" className="_1ip5u88" aria-busy="false">
    <div className="_1yofwd5"><div className="_1rltvky">
    <svg id="pre_icon" viewBox="0 0 18 18" role="img" aria-label="Previous" focusable="false">
    <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fill-rule="evenodd">    </path>
    </svg>
    </div>
    </div>
    </button>
    </li>
  )
}
export default Reviews;
