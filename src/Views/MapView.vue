<template>
 <div>
    <div id="map"></div>
  </div>
</template>



<script>
import { Map } from 'azure-maps-control';

export default {
  name: 'MyComponent',
  data() {
    return {
      map: null,
    }
  },
  mounted() {
    this.map = new Map('map', {
      center: [-122.33, 47.60],
      zoom: 12,
      view: 'Auto',
      authOptions: {
        authType: 'subscriptionKey',
        subscriptionKey: 'AtwGjLVyWx2Ubgvq1vBdA4UfPTsWpEsK10chORUKFOU'
      }
    });
    this.map.getUserLocation().then(userLocation => {
      this.map.setCamera({
        center: userLocation.position,
        zoom: 12
      });
    });
  }
}
</script>








<style scoped>
#map {
  height: 100vh;
  width: 100vw;
}

</style>
