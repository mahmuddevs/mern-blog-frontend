import React from 'react'
import { Category } from '../components/Category';
import { Recomended } from '../components//Recomended';
import { Author } from '../components//Author';

const Sidebar = () => {
    return (
        <div className="col-lg-4">
            <div className="widget-blocks">
                <div className="row">
                    <Author />
                    <Recomended />
                    <Category />
                </div>
            </div>
        </div>
    )
}

export default Sidebar