document.getElementById("header").innerHTML = `
    <style>
      .header {
        position: relative;
        width: 100%;
        background-image: url("imge/header.jpg");
        background-size: cover;
        background-position: center;
        height: 883px;
      }
      .title {
        position: absolute;
        top: 40%;
        width: 100%;
        text-align: center;
        display: flex;
        justify-content: center;
      }
      .title .center {
        width: 822px;
        height: 148px;
        text-align: center;
        font-family: "Lora", serif;
        font-weight: 400;
        font-size: 64px;
        line-height: 74px;
        color: white;
      }
      .bar {
        position: absolute;
        top: 0;
        width: 100%;
        margin-top: 31px;
        padding: 0 32.5px;
      }
      .time-bar {
        background-color: black;
        color: white;
        display: flex;
        justify-content: space-between;
        border-radius: 8px;
        width: 100%;
        padding: 8px 12px;
        align-items: center;
      }
      .time-bar-right {
        display: flex;
        align-items: center;
      }
      .time-item {
        text-align: center;
        margin: 0 4px;
      }
      .menu {
        display: flex;
        justify-content: space-between;
        margin: 13px 12px 0 12px;
        color: white;
        align-items: center;
      }
      .menu-left,
      .menu-right {
        display: flex;
        align-items: center;
        text-transform: uppercase;
      }
      .menu-left,
      .menu-center,
      .menu-right {
        width: 30%;
        text-align: center;
      }
      .mr-2 {
        margin-right: 2px;
      }
      .menu-right div {
        display: flex;
        align-items: center;
      }
      .mr-16 {
        margin-right: 16px;
      }
      .menu-right {
        justify-content: end;
      }
    </style>

     <div class="header">
      <div class="bar">
        <div class="time-bar">
          <div class="time-bar-left">
            FREE SHIPPING · COUPON: FREE. Exchanges and returns within 30 days.
          </div>
          <div class="time-bar-right">
            <div class="time-item">
              <div class="time-value">00</div>
              <div class="time-label">days</div>
            </div>
            <div class="time-item">:</div>
            <div class="time-item">
              <div class="time-value">10</div>
              <div class="time-label">hours</div>
            </div>
            <div class="time-item">:</div>
            <div class="time-item">
              <div class="time-value">37</div>
              <div class="time-label">min</div>
            </div>
            <div class="time-item">:</div>
            <div class="time-item">
              <div class="time-value">42</div>
              <div class="time-label">sec</div>
            </div>
          </div>
        </div>
        <div class="menu">
          <div class="menu-left">
            <span class="material-icons mr-2">menu</span>
            Menu
          </div>
          <div class="menu-center">
            <h3>Orangy</h3>
          </div>
          <div class="menu-right">
            <div class="mr-16">
              <span class="material-icons mr-2">search</span>
              search
            </div>
            <div class="mr-16">Login</div>
            <div class="mr-16">Bag</div>
            <div>(0)</div>
          </div>
        </div>
      </div>
      <div class="title">
        <div class="center">Quis aliqua reprehenderit excepteur et dolore</div>
      </div>
    </div>
`;
