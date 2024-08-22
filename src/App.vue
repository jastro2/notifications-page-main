<template>
    <section class="section-container">
            <div class="notifications-header mb-3 align-items-center">
                <div class="notifications-header-title mb-3">
                    <h3 class="fw-bold mb-0">Notifications</h3>
                    <div id="notification-number">{{ unreadNotificationCount }}</div>
                </div>
                <div>
                    <a @click="markAsRead()" id="readAllBtn">Mark all as read</a>
                </div>
            </div>
        <post-boi 
            pfp="/assets/images/avatar-mark-webber.webp" 
            timestamp="1m ago"
            name="Mark Webber" 
            action="reacted to your recent post" 
            post-info="My first tournament today!"
            group-info=""
            message=""
            photo="">
        </post-boi>
        <post-boi 
            pfp="/assets/images/avatar-angela-gray.webp" 
            timestamp="5m ago"
            name="Angela Gray" 
            action="followed you" 
            post-info=""
            group-info=""
            message=""
            photo="">
        </post-boi>
        <post-boi 
            pfp="/assets/images/avatar-jacob-thompson.webp" 
            timestamp="1 day ago"
            name="Jacon Thompson" 
            action="has joined your group" 
            group-info="Chess Club"
            post-info=""
            message=""
            photo="">
        </post-boi>
        <post-boi 
            pfp="/assets/images/avatar-rizky-hasanuddin.webp" 
            timestamp="5 days ago"
            name="Ritzky Hasanuddin" 
            action="sent you a private message" 
            action-info=""
            post-info=""
            group-info=""
            message="Hello, thanks for setting up the Chess Club. Ive been a member for a few weeks now and Im already having lots of fun and improving my game."
            photo=""
            >
        </post-boi>
        <post-boi 
            pfp="/assets/images/avatar-kimberly-smith.webp" 
            timestamp="1 week ago"
            name="Kimberly Smith" 
            action="commented on your picture" 
            post-info=""
            group-info=""
            message=""
            photo="/assets/images/image-chess.webp">
        </post-boi>
        <post-boi 
            pfp="/assets/images/avatar-nathan-peterson.webp" 
            timestamp="2 weeks ago"
            name="Nathan Peterson" 
            action="reacted to your recent post" 
            post-info="5 end-game strategies to increase your win rate"
            group-info=""
            message=""
            photo="">
        </post-boi>
        <post-boi 
            pfp="/assets/images/avatar-anna-kim.webp" 
            timestamp="2 weeks ago"
            name="Anna Kim" 
            action="left the group" 
            post-info=""
            group-info="Chess Club"
            message=""
            photo="">
        </post-boi>
    </section>
</template>

<script>

    export default {
        methods: {
            markAsRead() {
                const notifications = document.querySelectorAll('.notification-container');
    
                notifications.forEach(notification => {
                    notification.classList.remove('notificationIsUnread');
                });
            },
            updateCount() {
                this.unreadNotificationCount = document.querySelectorAll('.notificationIsUnread').length;
            }
        },
        data() {
            return {
                unreadNotificationCount: 0,
                notifications: document.querySelectorAll('.notification-container')
            }
        }, 
        mounted() {
            this.updateCount();

            const observer = new MutationObserver(() => {
                this.updateCount();
            });
            
            observer.observe(this.$el, {
                childList: true,
                subtree: true,
                attributes: true,
                attributeFilter: ['class']
            });
            
            this.$once('hook:beforeDestroy', () => {
                observer.disconnect();
            });
        }
    }

</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Sulphur+Point:wght@300;400;700&display=swap');

#app {
    display: flex;
    justify-content: center;
}

body {
    background: #F7FAFD!important;
    font-family: 'Sulphur Point', sans-serif;
}

#readAllBtn:hover {
    color: #0A327B;
    cursor: pointer;
}

.section-container {
    background: #fff;
    margin: 10% 20%;
    padding: 30px;
    border-radius: 15px;
    width: 730px;
}

@media (max-width: 991px) {
    .section-container {
        margin: 0 auto;
    }

    .col-1.profile-picture {
        width: 15%!important;
        padding-right: 0!important;
    }

    .col-10 {
        width: 70%!important;
        padding-right: 10px!important;
    }

    .col-1.notification-photo {
        width: 15%!important;
    }
}

.notifications-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.notifications-header-title {
    display: flex;
    align-items: center;
}

#notification-number {
    margin-left: 20px;
    background: #0A327B;
    color: #fff;
    padding: 1px 12px;
    border-radius: 5px;
    font-weight: bold;
}

.timestamp {
    margin-top: -20px;
    color: #939CAD;
}

.notification-container {
    margin-top: 10px;
    padding: 12px 18px;
}

.notificationIsRead {
    background: #fff;
}

.notificationIsUnread {
    background: #F7FAFD;
}

.action {
    margin: 0 5px;
}

img.photo {
    max-width: 45px;
    margin-right: 16px;
}

.photo:hover {
    cursor: pointer;
}

.name {
    font-size: 16px;
    margin-bottom: 0;
    font-weight: bold;
}

.profile-picture {
    padding-left: 6px;
}

.post-info {
    color: #5E6778;
    font-weight: bold;
    cursor: pointer;
}

.post-info:hover {
    color: #0A327B;
}

.group-info {
    color: #0A327B;
    font-weight: bold;
    cursor: pointer;
}

.message-container {
    padding: 15px;
    border: 1px solid #DDE7EE;
}

.message-container:hover {
    background: #E5EFFA;
    cursor: pointer;
}

.notification-container.notificationIsUnread .notification-text p span:last-of-type::after {
    content: '';
    width: 8px;
    height: 8px;
    margin-left: 10px;
    margin-top: 8px;
    background: red;
    position: absolute;
    border-radius: 50%;
}

</style>
