import React from 'react';
// import Rheostat from 'rheostat';
// import 'react-dates/initialize';
// import PropTypes from 'prop-types';
// import { withStyles, withStylesPropTypes } from './withStyles';

const PriceDistribution = () => {
    return (
        <div>
            Slider
            <input type='range' min="1" max="100" value="50" />
            {/* <Rheostat
                min={1}
                max={100}
                values={[1, 100]}
            /> */}

        </div>
    )
}

export default PriceDistribution
