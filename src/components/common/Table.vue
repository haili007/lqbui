<template>
  <div class="kz-basic-table-container">
    <div class="hidden-columns" ref="hiddenColumns"><slot></slot></div>
    <table class="kz-basic-table" cellspacing="0" cellpadding="0" >
      <thead>
        <tr>
          <th :key="index" v-for="(item,index) in $children">
            {{item.label}}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr :key="index" v-for="(item,index) in data" >
         <td :key="index" v-for="(item,index) in $children">
            {{item.label}}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'kz-table',
  data(){
    return {
      
    }
  },
  props: {
    data: {
      type: Array,
      defautl: []
    }
  },
  mounted(){
    console.log(this)
  }
}
</script>

<style >
.kz-basic-table-container {
  position: relative;
  border-radius: 3px;
  background: #ffffff;
  width: 100%;
  box-shadow: 0 1px 1px rgba(0,0,0,0.1);
}
.kz-basic-table {
  width: 100%;
  max-width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
}
.kz-basic-table thead, .kz-basic-table tbody {
  font-size: 12px;
}
.kz-basic-table thead th, .kz-basic-table tbody tr {
  border: 1px solid #ddd;
}
.kz-basic-table thead th {
  padding: 0 2px;
  height: 30px;
  overflow: hidden;
  white-space: nowrap;
  text-align: center;
  font-weight: 700;
  background-color: #f5f5f5;
  color: #676a6c;
}
.kz-basic-table tbody tr td {
  text-align: center;
  border-right-width: 1px;
  border-right-color: #e7e7e7;
  border-right-style: solid;
  word-break: break-all;
  word-wrap: break-word;
  height: 29px;
}
</style>
