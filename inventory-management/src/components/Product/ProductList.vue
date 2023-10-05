<script setup>
import { ref, onBeforeMount } from "vue";

const searchField = ["title"];
const searchValue = ref();
const Item = ref([]);

onBeforeMount(async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    Item.value = data.products;
  } catch (error) {
    console.error(error);
  }
});

const Header = [
  { text: "Title", value: "title" },
  { text: "Unit Price", value: "price", sortable: true },
  { text: "Number of Items", value: "stock" },
  { text: "OPERATION", value: "operation" },
];
</script>
<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div>
              <input
                placeholder="Search..."
                class="form-control mb-2 w-auto form-control-sm"
                type="text"
                v-model="searchValue"
              />
              <EasyDataTable
                buttons-pagination
                alternating
                :headers="Header"
                :items="Item"
                :rows-per-page="10"
                :search-field="searchField"
                :search-value="searchValue"
              >
                <template #item-operation="Item">
                  <div class="operation-wrapper">
                    <router-link
                      :to="{
                        name: 'product-detail',
                        params: { id: Item.id },
                      }"
                      class="btn btn-sm btn-primary"
                    >
                      View
                    </router-link>
                  </div>
                </template>
              </EasyDataTable>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
