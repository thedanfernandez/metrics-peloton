<script>
    import {csvData} from "../../store/store.js";
import demoData from "./demoData.json";

let y = 0;

const updateData = (json) => {
      try {
        csvData.set(json);
        y = 0;
        localStorage.setItem("savedData", JSON.stringify(json));
      } catch (error) {
        errorStatus = true;
      }
};

const loadDemoMode = () =>{
      updateData(demoData);
};
</script>
<svelte:window bind:scrollY={y} />
<button class="footer-button" on:click={() => loadDemoMode()}><span class="sr-only">Activate </span>Demo Mode</button>

