import Pagination from 'react-js-pagination';
import PropTypes from 'prop-types';

const Paginator = (props) => {
  return (
    <div>
      <Pagination
        itemClassFirst={props.itemFirstClassName}
        itemClassLast={props.itemLastClassName}
        itemClassNext={props.itemNextClassName}
        itemClassPrev={props.itemPrevClassName}
        itemClass={props.itemClassName}
        activePage={props.activePage}
        itemsCountPerPage={props.itemsCountPerPage}
        totalItemsCount={props.totalItemsCount}
        pageRangeDisplayed={props.pageRangeDisplayed}
        onChange={props.onChange}
        firstPageText={props.firstTitle}
        lastPageText={props.lastTitle}
        prevPageText={props.prevTitle}
        nextPageText={props.nextTitle}
        innerClass={props.innerClass}
      />
    </div>
  );
};

Paginator.defaultProps = {
  itemFirstClassName: null,
  itemLastClassName: null,
  itemNextClassName: null,
  itemPrevClassName: null,
  itemClassName: 'Paginator',
  pageRangeDisplayed: 3,
  itemsCountPerPage: 10,
  totalItemsCount: 400,
  firstTitle: '<<',
  lastTitle: '>>',
  nextTitle: '>',
  prevTitle: '<',
  innerClass: 'PaginatorContainer',
  activePage: 1,
  onChange: (_) => null,
};

Paginator.propTypes = {
  itemFirstClassName: PropTypes.string,
  itemLastClassName: PropTypes.string,
  itemNextClassName: PropTypes.string,
  itemPrevClassName: PropTypes.string,
  itemClassName: PropTypes.string,
  pageRange: PropTypes.number,
  itemsPerPage: PropTypes.number,
  total: PropTypes.number,
  firstTitle: PropTypes.string,
  lastTitle: PropTypes.string,
  nextTitle: PropTypes.string,
  prevTitle: PropTypes.string,
  innerClass: PropTypes.string,
  activePage: PropTypes.number,
  onChange: PropTypes.func,
};

export default Paginator;
