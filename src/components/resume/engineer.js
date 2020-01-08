import React from 'react'

import Card from '@material-ui/core/Card'

import Layout from '../layout'
import SEO from '../seo'
import { CardContent, Typography } from '@material-ui/core'

const EngineerResume = () => (
    <div>
        {/* <SEO title="Resume" /> */}
        <h2>2020</h2>
        <Card variant="outlined">
            <CardContent>
                <Typography>
                    title
                </Typography>
                <Typography>
                    body
                </Typography>
            </CardContent>
        </Card>
        <br />
        <h2>2019</h2>
        <Card variant="outlined">
            <CardContent>
                <Typography>
                    title
                </Typography>
                <Typography>
                    body
                </Typography>
            </CardContent>
        </Card>
    </div>
)

export default EngineerResume
