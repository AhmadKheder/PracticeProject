import React from "react";
import { useRoutes } from "react-router";
import TodoDetailes from "./pages/TodoDetailes";
import TodoOverview from "./pages/TodoOverview";

interface Props {}

function Todos(props: Props) {
  const routes = useRoutes([
    { path: "/", element: <TodoOverview /> },
    { path: "/:id", element: <TodoDetailes /> },
  ]);

  return routes;
}

export default React.memo(Todos);
