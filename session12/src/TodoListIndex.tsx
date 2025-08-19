import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { TodoListFind } from "./component/TodoListFind";
import { TodoListNav } from "./component/TodoListNav";
import { TodoListContent } from "./component/TodoListContent";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <section className="w-100 vh-100 gradient-custom">
      <div className="w-100 container py-5 h-100">
        <div
          className="row d-flex justify-content-center align-items-center
              h-100"
        >
          <div className="col col-xl-10">
            <div className="card">
              <div className="card-body p-5">
                <h3 style={{ textAlign: "center", marginBottom: 40 }}>
                  Quản lý công việc
                </h3>
                <TodoListFind></TodoListFind>
                {/* Tabs navs */}
                <TodoListNav></TodoListNav>
                {/* Tabs navs */}
                {/* Tabs content */}
                <TodoListContent></TodoListContent>
                {/* Tabs content */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </StrictMode>
);
