<script>
  import { fly } from "svelte/transition";
  export let selectedProj;
  let experiences = {};

  //  Selecting experience
  const selectFunction = (v) => {
    if (v == selectedProj) return;
    selectedProj = {};
    setTimeout(() => {
      selectedProj = v;
    }, 200);
  };

  //    Getting projects data
  fetch("/resume.json")
    .then((response) => response.json())
    .then((json) => (experiences = json));
</script>

<div class="py-2 d-flex h-100 justify-content-between flex-column">
  {#if Object.keys(experiences).length > 0}
    {#each experiences.projects as fact, i}
        <a target="_blank" rel="noopener noreferrer" href={fact.url}>
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div class="projectBubble ms-auto hvr-grow my-1 my-lg-0" in:fly={{ y: -5, delay: i * 200 + 480, duration: 1600 }} on:click={() => selectFunction(fact)}>
            <div>{fact.name.toUpperCase()}</div>
            <div>
              {fact.startDate.split("-")[0].toUpperCase()}
            </div>
          </div>
        </a>
    {/each}
  {/if}
</div>

<style>
  .projectBubble {
    background-color: blue;
    display: flex;
    justify-content: space-between;
    color: White;
    border-radius: 14px;
    padding: 4px 12px;
    cursor: pointer;
    font-size: 2rem;
    width: 100%;
    max-width: 600px;
  }
</style>
