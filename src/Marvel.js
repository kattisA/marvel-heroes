import React from 'react';
import {Container} from "semantic-ui-react";

const Marvel = ({data}) => {
    return (
        <Container>
            <div>
                <div className="ui card">
                    <div className="image">
                        <img src={data[4].thumbnail.path + "." +data[4].thumbnail.extension}/>
                    </div>
                    <div className="content">
                        <a className="header">{data[4].name}</a>
                        <div className="meta">
                            <span className="date">Joined in 2013</span>
                        </div>
                        <div className="description">
                            {data[4].description}
                        </div>
                    </div>
                    <div className="extra content">
                        {/*<a>
                       <i className="user icon"></i>
                       22 Friends
                   </a>*/}
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Marvel;