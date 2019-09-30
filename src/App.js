import React from 'react';
import './App.css';
import HomePage from './Homepage';
function App() {
  return (
    <div>
<nav class="navbar navbar-expand-md navbar-dark bg-success">
  <a class="navbar-brand" href="index.html">Shatterproof</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarToggler">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="events.html">Events</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="testimonials.html">Testimonials</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="fund.html">Fund</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="chatbot.html">Chatbot</a>
      </li>
    </ul>
  </div>
</nav>


    <div class="jumbotron text-center style0 text-light rounded-0">
    <h1 class="display-1">Shatterproof Social</h1>
    <p class="lead">
    END THE STIGMA
    </p>
    <p>
    Together, armed with knowledge, we can change the conversation about addiction.
    </p>
    </div>

          <HomePage/>
          <div className="App">
          <div id="mapid">
          </div>
          </div>
    </div>
  );
}
export default App;
