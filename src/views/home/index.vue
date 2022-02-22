<script lang="ts">
import { defineComponent } from 'vue';
import axios from '@/shared/axios';

export default defineComponent({
  setup() {
    axios
      .get('/users/XPoet')
      .then((res: any) => {
        console.log(res);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }
});
</script>
