import React, { Component , Fragment} from 'react';
import NavigationComonent from './NavigationComponent/NavigationComponent'
import Auxx from '../../hoc/Auxx'
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
// import { withRouter, Route ,Redirect} from "react-router-dom";


// import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import RestoreIcon from '@material-ui/icons/Restore';

// const useStyles = makeStyles({
//     root: {
//         width: 500,
//     },
// });


class Navigation extends Component {
    // classes = useStyles();
    //  [value, setValue] = useState(0);
    // state = '/posts';
    // constructor(props) {
    //     super(props);
    // }

    state = {
        pathes: [
            { path: '/posts', label: 'posts' },
            { path: '/newPost', label: 'new post' },
            { path: '/logOut', label: 'logOut' }
        ],
        value: 'posts'
    }
    // componentWillMount() {
    //     return !this.props.isAuthenticated && this.props.match !== '/LogIn'            
    // }


    handleChange(event, newValue) {
        // let value = () => {
        //     this.state.pathes.filter((p) => {
        //         if (p.path == this.props.RedirectPath)
        //             return p
        //         return null
        //     });
        // } ;

        // this.setState( { value :  value } );
        // this.props.setPath(this.state.pathes[newValue].path);
        console.log(this.state.pathes[newValue].path);
        this.props.history.push(this.state.pathes[newValue].path);
    }

     renderedComponents = this.state.pathes.map(path => (
        <BottomNavigationAction label={path.label} >
            <NavigationComonent link={path.path} {...this.props}> posts </NavigationComonent>
        </BottomNavigationAction>)
    );

    render() {
        console.log(this.props);
        console.log('rendering navigation');
        return (
            <React.Fragment>
                <BottomNavigation
                    value={this.state.value}
                    onChange={(event, newValue) => {
                        this.handleChange(event, newValue);
                    }}
                    showLabels
                >
                    {this.renderedComponents}
             
                </BottomNavigation>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        RedirectPath: state.authReducer.RedirectPath
    };
};

const mapDispatchToProps = dispatch => {
    return {

        setPath: (path) => dispatch(actions.setRedirectPath(path)),
        logOut: () => dispatch(actions.logout())

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);