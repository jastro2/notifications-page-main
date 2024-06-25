<template>
    <section>
        <div>
            <div>
                <h3>Notifications</h3>
                <div>#</div>
            </div>
            <div>
                <a>Mark all as read</a>
            </div>
        </div>
        <post-boi></post-boi>
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