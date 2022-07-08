import {Redirect, Route} from "react-router-dom";
import Buy from "./pages/Buy";

export default (
    <Route path={'/'}>
    <Route path={'/buy'} component={Buy}/>
    <Redirect to={'/buy'}/>
</Route>
)
