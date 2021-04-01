import React from 'react';

class Nav extends React.Component{
    render(){
        return(
        <div className="Nav">
            <div className="NavMain" >
                <div className="NavContent" >
                    <div className="NavLogo">
                        <div>minstagram</div>
                    </div>
                    <div className="NavSearch">
                        <input type="text"className="NavSearchInput" placeholder="🔎 검색" />
                    </div>
                    <div className="NavTools" >
                        <a href="" >
                            <div className="NavToolsHome" >
                                <img src="/image/home.svg" alt="home" /></div>
                        </a>
                        <a href="" >
                            <div className="NavToolsDirect" >
                                <img src="/image/direct.svg" alt="direct" /></div>
                        </a>
                        <a href="" >
                            <div className="NavToolsExplore" >
                                <img src="/image/navigator.svg" alt="explore" /></div>
                        </a>
                        <a href="" >
                            <div className="NavToolsLike" >
                                <img src="/image/heart.svg" alt="like" /></div>
                        </a>
                        <a href="" >
                            <div className="NavToolsMyprofile">
                                <img src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/131916746_693954911309836_860742220314320020_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=DlDays4o_S4AX_YNX7d&ccb=7-4&oh=7717b83a8c9a8b4d85b9c71c49db04ab&oe=60821FED&_nc_sid=7bff83" alt="me" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>        
        )
    }
}
export default Nav;