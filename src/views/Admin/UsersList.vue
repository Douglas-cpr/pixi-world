<script setup lang="ts">
import Button from '@/components/Button/index.vue';
function openModalEditUser(user: any) {
  return
}

function openModalDeleteUser(user: any) {
  return
}

const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'aa',
    role: 'admin',
  },
  {
    id: 2,
    name: 'John Doe',
    email: 'aa',
    role: 'admin',
  },
  {
    id: 3,
    name: 'John Doe',
    email: 'aa',
    role: 'admin',
  }
]

</script>

<template>
  <section class="list">
    <div class="list__header">
      <h2 class="header__title">Users</h2>
      <Button :onClick="() => {}" type="secondary" class="header__btn">Add User</Button>
    </div>
    <div class="body">
      <div class="body__item" v-for="user in users" :key="user.id">
        <div class="item__field">{{ user.name }}</div>
        <div class="item__field">{{ user.email }}</div>
        <div class="item__field">{{ user.role }}</div>
        <div class="item__actions">
          <Button :onClick="() => {}" class="item__actions__btn" @click="openModalEditUser(user)">Edit</Button>
          <Button :onClick="() => {}" class="item__actions__btn" @click="openModalDeleteUser(user)">Delete</Button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.list {
  background-color: var(--background-light);
  border-radius: 0.25rem;
  padding: 15px;
  width: 100%;
  margin-top: 2rem;
  color: var(--brand-main);
}

.list__header {
  display: flex;
  justify-content: space-between;
  height: 60px;
}

.body__item {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid var(--border-light);
}

.item__field {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-align: center;
}

.item__actions {
  display: flex;
  gap: 10px;
  cursor: pointer;
}
</style>