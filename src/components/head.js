import React from 'react'
import Helmet from 'react-helmet'

export default () => {
    return (
        <Helmet 
            link={[
                {rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"},
                {rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons"},
            ]}
        />
    );
}