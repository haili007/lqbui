<template>
    <kz-table :data="data">
        <kz-table-col :key="index" v-for="(item,index) in opts" :label="item.label" >
            <template  slot-scope="scope">
                <div @click="item.clickHandler"  v-if="item.formatter&&scope.row" v-html="item.formatter(scope.row)" class="test">

                </div>
                <span v-else >
                    {{scope.row[item.name]}}

                </span>
            </template>
        </kz-table-col>
    </kz-table>
</template>

<script>
import KzTable from "./Table.vue";
import KzTableCol from "./TableCol";
export default {
  name: "kz-jgrid",
  data() {
    return {};
  },
  props: {
    opts: {
      type: Array,
      default: []
    },
    data: {
      type: Array,
      default: []
    }
  },
  comments: {
    KzTable,
    KzTableCol
  },
  methods: {}
};
</script>

<style>

</style>
