<template>
    <div id="img">
        <div class="prompt">
            <span>每天看点好内容</span>
        </div>
        <div class="btns">
            <button disabled="disabled" class="download">极速下载</button>
            <button disabled="disabled" class="open">打开</button>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="stylus">
    #img
        width: 100%;
        height: 8rem;
        background: url('../assets/promotion_bg.jpg') 0 0 no-repeat;
        display: flex;
        align-items: center;
        .prompt, .btns
            flex: 1;
            text-align: center;
            .download, .open
                border-radius: 0.5rem;
                padding: 0.5rem 1rem;
                border: 0;
            .download
                color: #ffffff;
                background: #00b600;
            .open
                background: transparent;
                border: 0.1rem solid #00b600;
                color: #00b600;
                margin-left: 0.5rem;
        .prompt
            color: #00b600;
            font-size: 1.6rem;
</style>
