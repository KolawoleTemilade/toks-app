import * as React from 'react';
import Layout from './Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


interface ISearchProps {
}

const Search: React.FunctionComponent<ISearchProps> = () => {
  return(
  <>
  <Layout>
  <div className='w-full'>
    <input type="text"
    className='  relative w-[95%] h-12 border border-black rounded-full m-5  p-5 '
     />
  <FontAwesomeIcon icon={faSearch} className='absolute right-16 top-6 w-5 h-5 bg-[#eac69680] border p-2 rounded-r-full cursor-pointer'/>
  </div>
  </Layout>
  </>
  ) ;

};

export default Search;
