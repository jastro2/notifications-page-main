<template>
    <div class="container mx-0 px-0">
        <div @click="toggleRead()" class="notification-container rounded-2" :class="{ notificationIsUnread: notificationIsUnread}">
            <div class="row align-items-start">
                <div class="col-1 profile-picture">
                    <div class="d-flex">
                        <img class="photo" :src="pfp">
                    </div>
                </div>
                <div class="col-10">
                    <div class="notification-text">
                        <p><span class="name">{{name}}</span><span class="action mb-0">{{ action }}</span><span v-if="postInfo" class="post-info">{{ postInfo }}</span><span v-if="groupInfo" class="group-info">{{ groupInfo }}</span></p>
                    </div>
                    <div class="timestamp pt-1">
                        <span>{{ timestamp }}</span>
                    </div>
                </div>
                <div class="col-1 p-0 notification-photo">
                    <div class="notification-img">
                        <img v-if="photo" class="photo" :src="photo">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-11 offset-1 pe-md-0 pe-4">
                        <p v-if="message" class="message-container mb-0 mt-2 rounded-2">{{ message }}</p>
                    </div>
                </div>
            </div>        
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'pfp',
            'name',
            'action',
            'postInfo',
            'groupInfo',
            'message',
            'photo',
            'timestamp'
        ],
        data() {
            return {
                notificationIsUnread: true,
            }
        },
        methods: {
            toggleRead() {
                this.notificationIsUnread = !this.notificationIsUnread;
            }
        }
    };
</script>
