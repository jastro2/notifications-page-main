<template>
    <section class="section-container">
            <div class="notifications-header">
                <div class="notifications-header-title">
                    <h3>Notifications</h3>
                    <div id="notification-number">#</div>
                </div>
                <div>
                    <a>Mark all as read</a>
                </div>
            </div>
        <post-boi 
            id="mark webber" 
            timestamp="1m ago"
            name="Mark Webber" 
            action="reacted to your recent post" 
            action-info="My first tournament today!">
        </post-boi>
        <post-boi 
            id="angela gray" 
            timestamp="5m ago"
            name="Angela Gray" 
            action="followed you" 
            action-info=''>
        </post-boi>
        <post-boi 
            pfp="jacob thompson" 
            timestamp="1 day ago"
            name="Jacon Thompson" 
            action="has joined your group" 
            action-info="Chess Club">
        </post-boi>
        <post-boi 
            pfp="/assets/images/avatar-rizky-hasanuddin" 
            timestamp="5 days ago"
            name="Ritzky Hasanuddin" 
            action="sent you a private message'" 
            action-info=""
            message="Hello, thanks for setting up the Chess Club. Ive been a member for a few weeks now and Im already having lots of fun and improving my game.">
        </post-boi>
        <post-boi 
            id="kimberly smith" 
            timestamp="1 week ago"
            name="Kimberly Smith" 
            action="commented on your picture" 
            action-info=""
            photo="/assets/images/avatar-rizky-hasanuddin.webp">
        </post-boi>
        <post-boi 
            id="nathan peterson" 
            timestamp="2 weeks ago"
            name="Nathan Peterson" 
            action="reacted to your recent post" 
            action-info="5 end-game strategies to increase your win rate">
        </post-boi>
        <post-boi 
            id="anna kim" 
            timestamp="2 weeks ago"
            name="Anna Kim" 
            action="left the group" 
            action-info="Chess Club">
        </post-boi>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                postBoi: [
                    {
                        id: 'mark webber',
                        name: 'Mark Webber',
                        action: 'reacted to your recent post',
                        actionInfo: 'My first tournament today!'
                    },
                    {
                        id: 'angela gray',
                        name: 'Angela Gray',
                        action: 'followed you',
                        actionInfo: ''
                    },
                    {
                        id: 'jacob thompson',
                        name: 'Jacon Thompson',
                        action: 'has joined your group',
                        actionInfo: 'Chess Club'
                    },
                    {
                        id: 'ritzky hasanuddin',
                        name: 'Ritzky Hasanuddin',
                        action: 'sent you a private message',
                        actionInfo: '',
                        message: 'Hello, thanks for setting up the Chess Club. Ive been a member for a few weeks now and Im already having lots of fun and improving my game.'
                    },
                    {
                        id: 'kimberly smith',
                        name: 'Kimberly Smith',
                        action: 'commented on your picture',
                        actionInfo: '',
                        photo: './assets/images/image-chess.webp'
                    },
                    {
                        id: 'nathan peterson',
                        name: 'Nathan Peterson',
                        action: 'reacted to your recent post',
                        actionInfo: '5 end-game strategies to increase your win rate'
                    },
                    {
                        id: 'anna kim',
                        name: 'Anna Kim',
                        action: 'left the group',
                        actionInfo: 'Chess Club'
                    }
                ]
            }
        }
    }
</script>

<style>

body {
    background: #f7fafd;
}

.section-container {
    background: #fff;
    margin: 20%;
    padding: 30px;
    border-radius: 15px;
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
    padding: 3px 10px;
    border-radius: 5px;
}

.notification-container {
    display: flex;
    align-items: center;
    margin-top: 10px;
    padding: 5px 10px;
}

.unread-notification {
    background: #f7fafd;
}

.action {
    margin: 0 5px;
}

</style>
