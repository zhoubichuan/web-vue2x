<template>
    <div class="quick-entry">
        <div class="header">
            <div class="title-name">
                <img class="img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAABZJJREFUSEu9ll2MXVUVx397n887H+1MoVSY4qhtoji1lE6bEhUoWoSqD2Cc6IOaPigMDxpjmrSYaEZCfDAh4IMag1EknbZTSXgzVDQUo2BMg9PijIVWagPC0I4zt51p7/nYey9zzr13uHPbmVQfuLnJuefcfdZvr7XX+q+leI8/6j3msSRwZFJ2eB6fEPiAEnqksTPn3t1i+UygfOTK7zTClLX84S9V/nTkTmXaHboMOHJCtih4Asem0p6UNsvrcvfFoua6xvWEga8+tlkdbYW+CxRR35tgi1L8UYS4HdBusPV+qY0gJA5u//FWjqJUueU6UESNTBJklmMifOT/Md4Mb+lda0RgfPU2BkeKx0qJKmGgLv2NOwV+/7+ErdyY5gjwknPciGNIILos/I57+m7juQKqRkZEH7kDvbmbh0V4aKkzu8xrMGi+TwdjxSY9Qewl1hnDr0RY27TTyKtH+h0/4AWcGjok3sAA3n/m+LnAroWFyyeL0R67406eNYJ4IUJaT40soa+W8KwIUTNaaJ7sqTE8NY9R258X/5b1BLU3OCSOz19NZgIm6OKTXkA1cDjjymPDr6DyHD03w4gzfLl5lkox2t3L/a/NkamhCQlXQ5jOchDL51pT+7JMBON5PGIMD2nN4yu7ecJ1YPJLCBUIDZ4zeNVZvp4b9ixES7Ff38gDTJCpnb+VaNUqoiDhgHN89ko11wAbP2Rvbw+Hp6d5wBi+EXWwozvilItwdIJ/AV9igrf/xVNOuL25YaU40HkNwzMzpGrX8xKH3UTzVQ6IsPOK9acwYcjea1Zx2BiszVHnZvmFONb6MV/sXcmrmYcKLf7ZswwZw09bo6MUB/v6GI5WkqhdpyXuqRL/+yz7aQDb6siEMXvWdPM7F2FcjvFjsvNVgpkZ9oljg8CPOrr4ZXKRW3PHPhrCsXCGHgdv6OdBqiRq6EWpXNtFPPUmo+LY2Q6LI/Zcdx2HicgLWJBhnMYoyKczdPUdvmMN3xIwAjGC315aaMb61zG8CPjmGUZdA9gMRxzyw7X9jKqMPIMcRR55mFqKtRWcV8NeNMjUW9xnDU8uJXdaMbZ5G8NVWjw8/Tr7neOe5ksoZj+4njtiS2KFTCJSpUsvnc3qDaLDQx07zadMymipv0uIvKcZu/ljPDg93wI8ebIObIZDK/66YT1fKWB+D0k2T5ZewOTddVgQoU+9wl15AaMu9ov0tOVea8a2bGoDTp5g1Nn6GRZvegGHblrPHh2SiCXtFLK0A3PqJKy5CfXai9ydWw42O8sVYQ2PCw9vHWwDHp/gZ9bypabSBCGPbvgwj3kpiXSReiF5er7u3fgEd+eO3ywVxnbd9Tyeum0r314U0vFX+G5u2N0Mjeex7+ZN7NYpyWxG1htibphDnvknX7PwkzL1F7ehJZu07/P49m08vAh4/B/cNX+RsYXCh0Qrfi3whnX0Ocf7EQaB9y0rf1cQ/Z4V3Lt9Iy9UizoslIYe4tBSeWmc56xjYMkEWGbkaC+J5lihFZOf+TQ7spRaWYffPClRep7Yd1SOn2HLO9M83dpaltHWqxn40uvX8IXBDbxsatRKaSvE+/oPEYYpFZcT//00t0yd41FrWNec1K7GcvsaT3Ni7Rr2bhxg3ObUsoja26+TqfuPSlALCFckxDYi9hXhpYzw2KsMzs3zceu4VoTehkGFKseh8lpORMWk0vzTYy7QvLWii5e3buTPNiHLfJIooXYhJqnkZGUDXh0R9IaEzhCv6CSsCYFfN7fwsRlKeWil0cqgi99OoYrOEYaQle0eAh8nFlfoLY7UD0hqjUw/l5KrERE9MYnfbwguKkKVEFEhKJpp6qELcAGzGhVFUHR0T6FcoawhFEAvqIuMFkQCnDbYQuhzR2Yz0t5O0jM++cBHMf8FtwizPBdGfPIAAAAASUVORK5CYII=" />
                <span>{{ title }}</span>
            </div>
            <div class="mine-paper" @click="handleMinePaperClick">
                <img class="book"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAsNJREFUSEu1lE1IFGEYx//vOx87uzvqbIKYWZsVHaJD0moXwQzKICK8eAiCDkFhBHYxuoSHTilEZBHUIQgisEg8RBDRkJcuggcPBqEpWdDXu7qrubsz7xPrYrs6Y7N78GGYw7zv8/ye//MxDFtsbIvjY1PADAkrCP45CXTEYsn/3VsHGM/SYYNnbwLsqASMIEDemTMkJWEkl1q62uwD+wd4n3HOcKJnM8vc+J5lcKm86mmcEDck6g05mfk639LR1LRSmthqlJdCWFHNnJlKK1baKS/wRnX7TBfVOus9GVHueADDSfdiKkcPviwrQVXZ9LxGk9gekSPdltblATz+lbudzPDehWwhe0dWriKsEhpMaZ/fpnZ4APd/UDuR+4gBKgG75xc5iBhUBnTWAmEfYSIHvP1dDBVSCHWmtHvqfAClxFvzjviZUixJQJUKXNoJqNxbmZQDDM0Wv+sqwYpKu68hANA/64qFNLeIKmuHqhDMqLT7dwUA+qZdsZzigUu2Ec8VQigi7YE9AYArH12RXSoATAW4vBfQfEokssC96SKGKQQtDPvufu5tcmk2FyaloD/MAhWaezYOGJsAns6VeCoEHoL98GAA4NyEFGylAKjIOIFCsJ8cCgB0j0uh5hVUaMQBRyd7OBEA6PoghZphVumqNddJRLX/S8r/usIhfDq+Qw6GoL1uYGx1iD0re2pMCi1XBOic0NPqIg0OYsEbzkAwGbkR0PUWQxvweJx4R0LPYZ2CsEZIxAm1UV7IKP8K6JGmyG+Olmv3AI69IaE78PSgpoqQqAdCZajI5yAZLSya7LQH0P6KhCrXK8g7qAahtZYh5DOyfvPgcMxNmej0ANpGaYwT2koP8hMSMwgHIsE9WIMlNQxOOLjh8TjyghpVjmsk0QiO/IOYDsR1n4nwSZ0RVqSK50PVGEWC5cpPqcK9WLv+F/sf+NT1D9T4AAAAAElFTkSuQmCC" />
                <span class="text">{{ subTitle }}</span>
                <img class="row"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAUCAYAAAC9BQwsAAAAAXNSR0IArs4c6QAAAIlJREFUOE+tkzEOAjEMBMfdFfcwSk7iCgpeRwkSLU+jWxQJCpIQJ5Hdj3a9XhuTY5McMaCkK7ACZzN7tdz8KEq6ASfgCWwtOAcX4AEcPLjYUVIXXA2nB/6bqgc3z5HBdzPbv0nHg1NWPSjZjTlHj1I1HEmpNUevNYXVT8lTcy5DJR/5zZh/HFF8Ay/LUBXICCAmAAAAAElFTkSuQmCC" />
            </div>
        </div>
        <ul class="content">
            <li v-clickoutside="() => item.id && active && handleOutSide(item.id)" class="card"
                v-for="(item, index) in listData" :key="index" @click="() => handleEntryClick(item)">
                <img v-if="item.pk" class="pk"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAWCAYAAABdTLWOAAAAAXNSR0IArs4c6QAAA55JREFUSEvNll1om1UYx3/POcmyrdENpzJhatCBE+zshR/VwpgoOMErdexCYemHtFDHwFXEL8Rqvako+DWQzlXdRGW91AsLo4zhLmQX6kZllnXZhqtXaTubdE3e9+j7lTTJ275pNzcDIXkPh/P+zv88//9zhEU++W1dKRU3O0xMbUWZe1BqPZqYaAHnq7xf91nhjfnjov1nf447z/1fHi+t44wpf53SujjrnkekQ8IYs9vSqVUS7zdKnvEA/Jf7MMuBLK9TP6S/sfEayNyjHTtEM4hSK4NdewoEKrk7vCpKBupXQOa3drz273G+Uz5KH+gKQF6GkpQg81vanjVKDlSq5B3N/0LJbHM6lVihf0ORrIasqMm1SWT1Sv+ogcIc5HI1xpG110MiDvkcFOfK5ko2wKoEYGBmulw2Cxin4rhnWtr2iyYd5rD5SsZf7kTdf2+F18zsJczvp7C+G4LpKRcotqsb2Xgn1peDmNGTHuS6G1DPdyPJ67AP/4D5+Wj9kPmH2283YsacaFkgBkruDiDt0T8wF/7CUUw13g3xOPapMawPPwmHTMTR7V3Irbdhfj2O/f2hysiJUjL3YNseYrznOjkkq8KULB4Ywh4eceerxruIvdgNlkWh5xWwizVKqqe3o+57AHP2DPbXA2CspUHONLcOi5bHFoKcX5OBkvMhaUiw4uN+twQKb74Nk9kKSJIN6Ke2Yyaz2Pv3urVYDvwg2hYXSHLNrefQsmG5SsotNxF/9w0P8qVXYW62BGkmLiDrbsTJEGvfXpj4c0kdx+tmKu9A5tHiBXd4a6qpSWvkJ8wvJyG5GvVIC+qOFCZzlmL/BxU1GTjM5PPYn74Pf19cBqSccyCN103qr8nqVmqyk1gDg5hMpsY40tSE2tzk1eMXn4HYSz3u4UjIsJq0jh3HnBgFY8PUFOb0OOC/vDqCzpxG796DrFmDfeQw5siPS4MU6YmEjHJ32C2oOidl0yb0znawLayD++D8eL3uLkqssDESMtLdIVe1sDBXTzyJatmCmZ7C/vwjuOR3qkVKzSgGdfqt1kjIK6GkW/NOoHfuQm5ejxkbxR76atGOIzG5iFVolI6+TCTktbpPijLPSXvvQcekkZDX4hZk4HXd2dsXpEgk5FVWclaUpKWr99v5MSe55vQ4WqXqyUmvnf03N3Mjckgr0yMv9GWqc1hmH2p93NYygGJDVMe5HMiqm3lRFBNGywlRMqIS8k0YXAD7D9JhaHFbYKxuAAAAAElFTkSuQmCC" />
                <span class="name">
                    {{ item.label }}
                    <img v-if="item.children" class="row" :src="`${item.id === active
                        ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAcCAYAAAATFf3WAAAAAXNSR0IArs4c6QAAAQhJREFUWEft1kEKwjAQBdBJJffoEVwKrjyK+wp6BE9QF+7tDTyCrtQ7iR0JWKy1CZP5FYqk6+TPY6ZJa2jkjxm5jxIQnVDq4Gg6OCs5zywfiShnMtW1MBsU5/YPMuIX7uRwbxRXl2KyRJEwsB/XsHAkBAzjhkGqgTIcjlQB/Tiu6nu2zSx33kcH1Y07GhjCNYdCskZ6eKKAMYVj1oawYqCmoGZPFysCIoWQvaKLGi3giiAZwQ4iwd1RabO8QG1g6IX3ZTKZne/b7QXO91wy8fqzoO4ua2f4kDU/FreVPYsPyTcQxzXF+5DRQBdiLB8M0XTI36c2UpIvumakt/4v1iUg2tXUwb/v4BOgsMIdoacDuQAAAABJRU5ErkJggg=='
                        : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAcCAYAAAATFf3WAAAAAXNSR0IArs4c6QAAAS5JREFUWEftlc0NwjAMhZ+ZoGwAKpPQBcoGcClcmYARuEIvsAEsUCahgg1gA/MnUIlaJY6DxKE9x89fn50Xwp9/9Od8aAG1E2od/JmDcZKlAC0JHDF35uVhtdU2q9Z/6QOTssj3dfqNIx4k2QWg6F3ETJNQkPFwNibizUcbOJfFui8CjJPpiYBetSgEpAn30ufrsci7QsAsJdDOLNJA1sMBDB6JR/wAaxT0GLevljVmfIW/LoSxc5K9tgJqndT+oBOgL6QW7tHXGVAKGQJODOgKGQrOC9AG+RSthLDkQohy0PasNblUV6fJTtEOms1dIDVw3iN2ybjnA+YR6KYJKgffYnVOhoAL4mAV8u7Z4hVcPG96W227/RMHpU0l54OMWNJQerYFlDrW7qDWMbP+BnoezR0+5pdoAAAAAElFTkSuQmCC'
                        }`
                        " />
                </span>
                <div class="child-item" :class="item.class" v-if="item.children" v-show="item.id === active">
                    <img class="triangle"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAASCAYAAADc4RcWAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAADFSURBVEiJ3dXRDYIwAEXR1w0YoRvICIzgCIzgCN2AERxBN0AncATcQDe4fmBjYiSltJTE+9mvEygP6d8CKqADBsZ6oN0adeN3bivQYQLks6VBFfAIoI6lUV0A5KtLgeqZIIChFKqPQMHaXyPQRIJgnAu7Fqjis0exubVQbiHIZ3OD5kxAqLwTAZwSQb42Fyi03DENpL5GoM0ISoeRfrFDsPlrD1im//65c0D1bTDvw1rSTtJeUrPo0S7vKeks6SLpaoy5vwBPG9lNAmOs1wAAAABJRU5ErkJggg==" />
                    <ul class="list">
                        <li class="box" v-for="(child, index) in item.children" :key="index"
                            @click="() => handleEntryChild(child)">
                            <span class="text">{{ child.label }}</span>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import Clickoutside from "element-ui/src/utils/clickoutside";

export default {
    name: "VueTab",
    props: {
        title: {
            type: String,
            default: ''
        },
        subTitle: {
            type: String,
            default: ''
        },
        data: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            active: "",
        };
    },
    directives: { Clickoutside },
    computed: {
        listData() {
            return this.data
        },
    },
    methods: {
        handleMinePaperClick() {
            this.$router.push({
                path: "/xxx",
            });
        },
        handleOutSide(val) {
            if (document.querySelector(".web-guide .dom-active") && this.active) return; // guid
            if (val === this.active) {
                this.active = "";
            }
        },
        handleEntryClick(item) {
            if (item.id) {
                let curVal = this.listData.find((o) => o.id === item.id).id || "";
                if (this.active === curVal) {
                    this.active = "";
                } else {
                    this.active = curVal;
                }
            } else {
                if (item.route) {
                    this.$router.push(item.route);
                } else if (item.getRoute) {
                    this.$router.push(item.getRoute());
                }
            }
        },
        handleEntryChild(item) {
            if (item.route) {
                this.$router.push(item.route);
            } else if (item.getRoute) {
                this.$router.push(item.getRoute());
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.quick-entry {
    width: 100%;
    height: 100%;
    background-color: #fff;
    box-shadow: 8px 16px 40px 0 rgba(202, 229, 255, 0.2);
    border-radius: 20px;
    padding: 30px;
    box-sizing: border-box;
    position: relative;

    .header {
        display: flex;
        justify-content: space-between;

        .title-name {
            display: flex;
            justify-items: center;
            align-items: center;

            .img {
                width: 28px;
                height: 28px;
            }

            span {
                font-weight: bold;
                font-size: 28px;
                color: #244367;
                margin-left: 10px;
                width: 149px;
            }
        }

        .mine-paper {
            width: 153px;
            height: 39px;
            background: linear-gradient(90deg, #3abaff 0%, #1e92ff 100%);
            border-radius: 12px 12px 12px 12px;
            cursor: pointer;

            &:hover {
                background-color: rgba(255, 255, 255, 1);
            }

            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;

            .book {
                height: 24px;
                width: 24px;
            }

            .text {
                font-weight: 400;
                font-size: 20px;
                color: #ffffff;
                margin: 0 2px 0 6px;
            }

            .row {
                width: 14px;
                height: 20px;
            }
        }
    }

    .content {
        margin-top: 24px;
        display: flex;

        .card {
            margin-right: 12px;
            flex: 1;
            height: 100px;
            border: 1px solid transparent;
            border-radius: 20px 20px 20px 20px;
            background-clip: padding-box, border-box;
            background-origin: padding-box, border-box;
            background-image: linear-gradient(45deg, rgba(218, 247, 255, 1), rgba(255, 255, 255, 0.85)),
                linear-gradient(45deg,
                    rgba(82.00000271201134, 218.00000220537186, 255, 1),
                    rgba(82.00000271201134, 218.00000220537186, 255, 0.18000000715255737),
                    rgba(82.00000271201134, 218.00000220537186, 255, 0.4000000059604645),
                    rgba(82.00000271201134, 218.00000220537186, 255, 0.75));
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: relative;

            &:last-child {
                margin-right: 0;
            }

            .pk {
                position: absolute;
                left: 0;
                top: 0;
                width: 41px;
                height: 22px;
            }

            .name {
                font-weight: 500;
                font-size: 24px;
                color: #244367;
            }

            .row {
                left: 20px;
                width: 20px;
                height: 14px;
            }

            &:hover {
                background-image: linear-gradient(45deg, rgba(182, 227, 255, 0.7), rgba(255, 255, 255, 0.85)),
                    linear-gradient(45deg,
                        rgba(82.00000271201134, 218.00000220537186, 255, 0.7),
                        rgba(82.00000271201134, 218.00000220537186, 255, 0.18000000715255737),
                        rgba(82.00000271201134, 218.00000220537186, 255, 0.4000000059604645),
                        rgba(82.00000271201134, 218.00000220537186, 255, 0.65));
                cursor: pointer;
            }

            .child-item {
                position: absolute;
                top: 106px;
                left: 50%;
                transform: translateX(-50%);
                z-index: 100;

                &.double {
                    .list {
                        width: 420px;
                    }
                }

                .triangle {
                    width: 37px;
                    height: 18px;
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    top: -17px;
                }

                .list {
                    width: 220px;
                    background: #ffffff;
                    box-shadow: 0px 20px 60px 0px rgba(128, 128, 128, 0.3);
                    display: block;
                    max-height: 275px;
                    overflow-y: auto;
                    border-radius: 20px;

                    .box {
                        margin-left: 20px;
                        width: 180px;
                        height: 65px;
                        border-radius: 16px 16px 16px 16px;
                        background: #f3f6f9;
                        margin-top: 20px;
                        text-align: center;
                        line-height: 65px;
                        display: inline-block;

                        .text {
                            font-weight: 400;
                            font-size: 24px;
                            color: #244367;
                        }

                        &:hover {
                            background: linear-gradient(270deg, #d4e8ff 0%, #d3fbff 100%);
                        }

                        &:last-child {
                            margin-bottom: 20px;
                        }
                    }
                }
            }
        }
    }
}
</style>