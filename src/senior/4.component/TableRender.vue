  <!-- src/components/table-render/table.vue -->
  <template>
  <table>
    <thead>
      <tr>
        <th v-for="(col, i) in columns" :key="i">{{ col.title }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, i) in data" :key="i">
        <td v-for="(col, j) in columns" :key="j">{{ row[col.key] }}</td>
      </tr>
    </tbody>
  </table>
</template>
  <script>
export default {
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
    data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
  <style>
table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  empty-cells: show;
  border: 1px solid #e9e9e9;
}
table th {
  background: #f7f7f7;
  color: #5c6b77;
  font-weight: 600;
  white-space: nowrap;
}
table td,
table th {
  padding: 8px 16px;
  border: 1px solid #e9e9e9;
  text-align: left;
}
</style>