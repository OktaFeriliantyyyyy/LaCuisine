import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
import Home from '../views/pages/home';

const routes = {
  '/favorite': Favorite,
  '/detail/:id': Detail,
  '/': Home,
};
export default routes;
