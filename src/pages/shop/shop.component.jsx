import React from 'react';
import CollectionsOverView from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.components';
import { Route } from 'react-router-dom';

const ShopPage = ({match}) => {
    return (
            <div className="shop-page">
               <Route exact path = {`${match.path}`} component={CollectionsOverView}/>
               <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        )
}
export default ShopPage;

//ShopPage - CollectionOverview Component
//CollectionPage - CollectionItem Component