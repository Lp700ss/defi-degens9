import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="Deus DAO Exploited Again, Loses Reported USD 13M+ in Flashloan Attack?" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2021" text="DeFi Lending Protocol Fortress Loses All Funds in Oracle Price Manipulation Attack?" />
        <Article imgUrl={blog03} date="Sep 26, 2021" text="Uniswap Has Deeper Liquidity Than Coinbase & Binance, Uniswap Co-Authored Study Claims?" />
        <Article imgUrl={blog04} date="Sep 26, 2021" text="DeFi Transactions at One-Year Low, NFTs and Games Standing Strong?" />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="Optimism Moves Toward Decentralized Governance Structure With OP Token Launch?" />
      </div>
    </div>
  </div>
);

export default Blog;
