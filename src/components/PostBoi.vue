<template>
    <div class="container">
        <div @click="toggleRead()" class="row">  
            <div class="notification-container">
                <img :src="id" alt="">
                <h2>{{name}}</h2>
                <p class="action">{{ action }}</p>
                <p class="action-info">{{ actionInfo }}</p>
                <img class="photo" :src="photo">
            </div>              
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'id',
            'name',
            'action',
            'actionInfo',
            'message',
            'photo'
        ],
        data() {
            return {
                notificationIsRead: false,
            }
        },
        methods: {
            toggleRead() {
                this.notificationIsRead = !this.notificationIsRead;
            }
        }
    };
</script>
