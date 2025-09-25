<template>
    <div>
        <h1>Document List</h1>
        <ul>
            <li v-for="document in documents" :key="document.id">
                <strong>{{ document.name }}</strong> - {{ document.price }}₽
                <router-link :to="`/documents/${document.id}/edit`">Edit</router-link>
                <button @click="deleteProduct(document.id)" class="delete-btn">Delete</button>
            </li>
        </ul>
        <router-link to="/documents/create" class="create-btn">Create New Document</router-link>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            documents: [],
        };
    },
    async created() {
        const response = await axios.get('/api/documents');
        this.documents = response.data;
    },
    methods: {
        async deleteDocument(id) {
            if (confirm('Are you sure you want to delete this document?')) {
                await axios.delete(`/api/documents/${id}`);
                this.documents = this.documents.filter(document => document.id !== id);
            }
        },
    },
};
</script>

<style scoped>
.create-btn,
.delete-btn {
    margin-left: 10px;
    padding: 5px 10px;
    border: none;
    cursor: pointer;
}

.delete-btn {
    background-color: red;
    color: white;
}

.create-btn {
    display: block;
    margin-top: 20px;
    background-color: green;
    color: white;
    text-align: center;
    text-decoration: none;
    padding: 8px 12px;
}
</style>
