<script>
  import { fly, fade } from "svelte/transition";
  import Projects from "./lib/projects.svelte";

  let selectedProj = {};
</script>

<main class="d-flex flex-column" style="min-height:100vh;">
  <div class="p-3 d-flex align-items-start justify-content-between flex-column flex-lg-row">
    <div>
      <h1 in:fly={{ y: -5, duration: 1200, delay: 100 }}>ARBARETIER<br />BAUDOUIN</h1>
      <h1 in:fly={{ y: -5, duration: 1200, delay: 300 }}><span class="opacity-50">CREATIVE <br />DEVELOPER</span></h1>
    </div>
    <div class="w-25 h-25 p-1" />
    <div class="align-self-stretch w-100">
      <Projects bind:selectedProj />
    </div>
  </div>

  <!--Displaying content of project-->
  {#if Object.keys(selectedProj).length > 0 && false}
    <div
      in:fly={{ x: 10, duration: 200 }}
      out:fly={{ x: -10, duration: 200 }}
      class="contentDisplay p-3  my-4 my-xl-auto mx-auto d-flex align-items-center justify-content-center"
    >
      <div class="summary h-100 d-flex  justify-content-center flex-column flex-xl-row">
        <div class="opacity-50 text-xl-end me-xl-4" style="min-width: 250px;">{selectedProj.name}</div> 
        <div>
          {selectedProj.summary}
        </div>
        <!-- <div class="ps-xl-4 w-100">
          <img class="w-100" style="border-radius:20px;" src={selectedProj.image} alt={selectedProj.name} />
        </div> -->
      </div>
    </div>
  {/if} 

  <!-- Footer -->
  <div class="container-fluid p-0 mx-0 mt-auto" in:fade={{ duration: 700, delay: 1200 }}>
    <footer class="d-flex flex-wrap justify-content-between align-items-center p-3 mt-2" style="background-color: rgba(0, 0, 0, 0.05);">
      <div class="col-md-4 d-flex align-items-center">
        <span class="mb-md-0 text-muted">&copy; 2023 Baudouin Arbarétier</span>
      </div>

      <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li class="ms-3">
          <a class="text-muted opacity-25" href="https://twitter.com/b_arbaretier" target="_blank" rel="noopener noreferrer"
            ><svg class="bi" width="24" height="24"><use xlink:href="#twitter" /></svg></a
          >
        </li>
      </ul>
    </footer>
  </div>

  <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
    <symbol id="facebook" viewBox="0 0 16 16">
      <path
        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
      />
    </symbol>
    <symbol id="instagram" viewBox="0 0 16 16">
      <path
        d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
      />
    </symbol>
    <symbol id="twitter" viewBox="0 0 16 16">
      <path
        d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
      />
    </symbol>
  </svg>
</main>

<style>
.contentDisplay {
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 14px;
  }

  .summary {
    font-size: 2.2rem;
  }
</style>
