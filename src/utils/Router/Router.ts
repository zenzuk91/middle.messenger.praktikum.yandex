import Route from '../Route/Route';
import Block from '../Block/Block';

export default class Router {
  static _instance: Router;
  routes: Route[] = [];
  history: History = window.history;
  private _currentRoute: Route | null = null;
  private readonly _rootQuery: string;

  constructor(rootQuery: string) {
    if (Router._instance) {
      return Router._instance;
    }

    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;

    Router._instance = this;
  }

  public use(pathname: string, block: typeof Block) {
    const route = new Route(pathname, block, { rootQuery: this._rootQuery });
    this.routes.push(route);
    return this;
  }

  public start() {
    window.onpopstate = (() => {
      this._onRoute(window.location.pathname);
    });

    this._onRoute(window.location.pathname);
  }

  private _onRoute(pathname: string) {
    const route = this.getRoute(pathname);
    if (!route) {
      this.go('/404');
      return;
    }

    if (this._currentRoute) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;
    route.render();
  }

  public go(pathname: string) {
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  public back() {
    this.history.back();
  }

  public forward() {
    this.history.forward();
  }

  public getRoute(pathname: string) {
    return this.routes.find(route => route.match(pathname));
  }
}
