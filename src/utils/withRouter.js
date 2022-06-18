import { useLocation, useNavigate, useParams } from "react-router-dom";
export function withRouter(Child) {
    return (props) => {
        const location = useLocation();
        // console.log('location :', location);
        const navigate = useNavigate();
        const params = useParams();
        console.log('params :', params);
        const match = { params: useParams() };

        // console.log('navigate :', navigate);
        return <Child {...props} navigate={navigate} location={location} params={params}
            match={match}
        />;
    }
}

// export function withMatch(Child) {
//     return (props) => {
//         let match = useMatch();
//         return <Child {...props} match={match}
//         />;
//     }
// }