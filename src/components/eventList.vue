<template>
    <div id="event-list">
        <share-temp></share-temp>
        <div class="event-details">
            <div class="event-title-wrapper">
                <span class="event-title">{{event.title}}</span>
                <span class="event-city">{{event.loc_name}}</span>
            </div>
            <div class="event-img">
                <img :src="event.image" alt="">
            </div>
            <div class="event-time">
                <span class="event-time-title">时间：</span>
                <div class="event-time-details">
                    <p class="event-start-time">{{event.begin_time}}</p>
                    <p class="event-end-time">{{event.end_time}}</p>
                </div>
            </div>
            <div class="event-address">
                <span class="event-address-title">地点：</span>
                <span class="event-address-detail">{{event.address}}</span>
            </div>
            <div class="event-fee">
                <span class="event-fee-title">费用：</span>
                <span class="event-fee-detail">{{event.price_range}}</span>
            </div>
            <div class="event-info">
                <div class="event-info-title">活动详情</div>
                <div class="event-info-details" ref="eventInfoDetails"></div>
            </div>
        </div>
        <div class="douban-info">
            <div class="db-introduce">
                <div class="logo">
                    <img src="../assets/douban-app-logo.png" alt="">
                </div>
                <div class="logo-info">
                    <p class="db-title">豆瓣</p>
                    <p class="db-description">我们的精神角落</p>
                </div>
            </div>
            <div class="db-prompt"><a href="#">去App Store免费下载ios客户端</a></div>
        </div>
    </div> 
</template>
<script>
import axios from "axios";
import shareTemp from './shareTemp'
export default {
  components:{
      shareTemp
  },  
  data() {
    return {
      event: {}
    };
  },
  created() {
    let href = window.location.href;
    let arr = href.split("?")[1].split("=");
    // var self = this
    axios({ method: "GET", url: "/api/event/list?loc=118221" }).then(res => {
      let events = res.data.events;
      events.forEach((ele, index) => {
        if (index === parseInt(arr[1])) {
          this.event = ele;
          this.$nextTick(() => {
            this.$refs.eventInfoDetails.innerHTML = this.event.content
          });
        }
      });
    });
  }
};
</script>
<style lang="stylus">
#event-list {
    width: 100%;
    position: absolute;
    left: 0;
    top: 4.8rem;
    margin: auto;
    padding: 0 1rem;
    .event-details {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 2rem;

        .event-title-wrapper {
            width: 100%;

            .event-title {
                font-size: 1.8rem;
                font-weight: 700;
                font-family: '微软雅黑';
            }

            .event-city {
                padding: 0.4rem;
                background: #ff8263;
                border-radius: 0.2rem;
                color: #ffffff;
            }
        }

        .event-img {
            width: 100%;
            padding: 2rem 0;
            text-align: center;
        }

        .event-time {
            width: 100%;
            display: flex;
            align-items: center;

            .event-time-title {
                color: rgba(7, 17, 27, 0.6);
            }
        }

        .event-address {
            width: 100%;

            .event-address-title {
                color: rgba(7, 17, 27, 0.6);
            }
        }

        .event-fee {
            width: 100%;

            .event-fee-title {
                color: rgba(7, 17, 27, 0.6);
            }
        }

        .event-info {
            width: 100%;

            .event-info-title {
                font-size: 1.8rem;
                color: #072;
                margin: 2rem 0;
                font-weight: 700;
            }
        }
    }

    .douban-info {
        width: 100%;
        margin-top: 5rem;

        .db-introduce {
            display: flex;
            justify-content: center;

            .logo {
                width: 5.8rem;
                height: 5.8rem;
                margin-right: 0.5rem;

                img {
                    width: 100%;
                }
            }

            .logo-info {
                display: flex;
                flex-direction: column;

                .db-title {
                    font-size: 3rem;
                }
            }
        }

        .db-prompt {
            text-align: center;
            margin-top: 1rem;
            font-size: 1.6rem;
            margin-bottom 3rem
            a {
                color: #00b600;
            }
        }
    }
}
</style>
