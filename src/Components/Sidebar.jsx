import React from "react";
import "./sidebar.css";

function Sidebar() {
  return (
    <div>
      <div class="sidebar">
        <div class="sidebar__categories">
          <div class="sidebar__category">
            <i class="material-icons">home</i>
            <span>Home</span>
          </div>
          <div class="sidebar__category">
            <i class="material-icons">local_fire_department</i>
            <span>Trending</span>
          </div>
          <div class="sidebar__category">
            <i class="material-icons">subscriptions</i>
            <span>Subcriptions</span>
          </div>
        </div>
        <hr />
        <div class="sidebar__categories">
          <div class="sidebar__category">
            <i class="material-icons">library_add_check</i>
            <span>Library</span>
          </div>
          <div class="sidebar__category">
            <i class="material-icons">history</i>
            <span>History</span>
          </div>
          <div class="sidebar__category">
            <i class="material-icons">play_arrow</i>
            <span>Your Videos</span>
          </div>
          <div class="sidebar__category">
            <i class="material-icons">watch_later</i>
            <span>Watch Later</span>
          </div>
          <div class="sidebar__category">
            <i class="material-icons">thumb_up</i>
            <span>Liked Videos</span>
          </div>
        </div>
        <hr />
        <div class="sidebar__categories">
          <div class="sidebar__category">
            <i class="material-icons">settings</i>
            <span>Settings</span>
          </div>
          <div class="sidebar__category">
            <i class="material-icons">help</i>
            <span>Help</span>
          </div>
          <div class="sidebar__category">
            <i class="material-icons">feedback</i>
            <span>Feedback</span>
          </div>
          <div class="sidebar__category">
            <i class="material-icons">flag</i>
            <span>Report</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
