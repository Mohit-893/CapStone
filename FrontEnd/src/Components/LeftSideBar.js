import React, { useState } from 'react'
import "../CSS/LeftbarOptions.css";

const LeftbarOptions = (props) => {

  return (
    <div className='sidebarOptions1'>
        <div className='sidebarOptions' onClick={() => {props.func('History')}}>
            <img
            src='https://cdn.pixabay.com/photo/2020/02/25/01/10/julius-caesar-4877717_960_720.png'
            alt=''
            />
            <p> History</p>
        </div>
        <div className='sidebarOptions' onClick={() => {props.func('Technology')}}>
            <img
            src='https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_960_720.jpg'
            alt=''
            />
            <p> Technology</p>
        </div>
        <div className='sidebarOptions' onClick={() => {props.func('Business')}}>
            <img
            src='https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            alt=''
            />
            <p> Business</p>
        </div>
        <div className='sidebarOptions' onClick={() => {props.func('cooking')}}>
        <img
            src='https://cdn.pixabay.com/photo/2016/05/26/14/11/chef-1417239_960_720.png'
            alt=''
            />
            <p> Cooking</p>
        </div>
        <div className='sidebarOptions'  onClick={() => {props.func('science')}}>
        <img
            src='https://cdn.pixabay.com/photo/2020/04/01/01/02/science-4989678_960_720.png'
            alt=''
            />
            <p> Science</p>
        </div>
        <div className='sidebarOptions' onClick={() => {props.func('Motivational Quotes')}}>
        <img
            src='https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80'
            alt=''
            />
            <p> Motivational Quotes</p>
        </div>
        <div className='sidebarOptions' onClick={() => {props.func('Health')}}>
        <img
            src='https://images.unsplash.com/photo-1477332552946-cfb384aeaf1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            alt=''
            />
            <p> Health</p>
        </div>
        <div className='sidebarOptions' onClick={() => {props.func('Fashion')}}>
        <img
            src='https://plus.unsplash.com/premium_photo-1661274030066-09e7378fc470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            alt=''
            />
            <p> Fashion</p>
        </div>
        {/* <div className='sidebarOptions'>
            <Add/>
            <p className='text'>Discover Spaces</p>
        </div> */}
    </div>
  );
}

export default LeftbarOptions;