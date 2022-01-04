import React, { Component } from 'react';
import { Select } from 'antd';
import Link from 'next/link';
import Router from 'next/router';

// import ProductResult from '../../../elements/products/ProductSearchResult';
import { connect } from 'react-redux';
// import { getProductsByKeyword } from '../../../../store/product/action';

const SearchHeader = () =>
{
    
    const searchPanel = false

    const keyword = ''
        
    

    const searchByProductName = (keyword, object) => {
        let matches = [];
        let regexp = new RegExp(keyword.toLowerCase(), 'g');

        object.forEach(product => {
            if (product.title.toLowerCase().match(regexp))
                matches.push(product);
        });

        return matches;
    };

    const handleSearch= (e) =>{
        if (e.target.value !== '') {
            const keyword = e.target.value;
            // this.props.dispatch(getProductsByKeyword(keyword));
            searchPanel =true,
            keyword = e.target.value
        } else {
            searchPanel= false ,
            searchProducts= [] 
        }
    }

    const handleSubmit= (e) =>{
        e.preventDefault();
        const keyword = this.state.keyword;
        Router.push(`/search?keyword=${keyword}`);
    }

        //카테고리는 백엔드에서 받아야 한다. 
        const exampleCategories = [
            'All',
         
        ];

    return (
        <form
            className="ps-form--quick-search"
            method="get"
            action="/"
            onSubmit={handleSubmit}>
            <div className="ps-form__categories">
                <select className="form-control">
                    {exampleCategories.map(option => (
                        <option value={option} key={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
            <input
                className="form-control"
                type="text"
                placeholder="패키지 상품코드를 입력하세요"
                onChange={handleSearch}
            />
            <button onClick={handleSubmit}>Search</button>
            <div
                className={`ps-panel--search-result${
                    searchPanel && searchPanel === true ? ' active ' : ''
                }`}>
                {/* <div className="ps-panel__content">
                    {searchResults && searchResults.length > 0 ? (
                        searchResults.map(product => (
                            <ProductResult
                                product={product}
                                key={product.id}
                            />
                        ))
                    ) : (
                        <span>Not found! Try with another keyword.</span>
                    )}
                </div> */}
                <div className="ps-panel__footer text-center">
                    <Link href="/search">
                        <a>검색 모두 보기</a>
                    </Link>
                </div>
            </div>
        </form>
    );
}


export default SearchHeader;
