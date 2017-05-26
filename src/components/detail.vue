<template>
	<div class="cont">
		<div class="menu">
			<div class="menu-item" ref="class" @click="show(1)">
			    班级信息
			</div>
			<div class="menu-item" @click="show(2)" ref="house">
				寝室信息
			</div>
		
			<div class="menu-bar" :class="{ fadeIn: isAnimation}" ref="bar" ></div>
		</div>

		<div class="ad">
			<el-card class="box-card">
			</el-card>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data () {
			return {
				activeName: 'second',
				isAnimation: false,
				x: 10,
				time: null
			};
		},
		mounted: function () {
            let w = this.$refs.class.clientWidth;
            this.$refs.bar.style.width = w + "px";
            console.log(this.$refs.bar.style)
		},
		methods: {
			handleClick (tab, event) {
				console.log(tab, event);
			},
            show (val) {
            	if (val == 1) {
            	  this.$refs.bar.style.transform = "translateX(20%)";
            	} else {
                  this.$refs.bar.style.transform = "translateX(190px)";

            	}
                // this.$refs.bar.style.transform = "translateX(190px)";

            }
          
		}	

	}
</script>

<style scoped>
    .cont {
    	height: 100%;
    	width: 100%;
    	background-color: #8cbbb1;
    }
	.cont .menu {
		height: 5rem;
		border-bottom: 0.1rem solid #fff;
		color: #fff;
		width: 95%;
		margin: 0 auto;
		position: relative;
	}

	.cont .menu .menu-item {
		float: left;
		font-size: 2rem;
		padding:0.8rem 0.2rem 0.2rem 0.2rem;
		margin-left: 1.8rem;
	}

	.cont .menu .menu-bar {
		position: absolute;
		height: 0.3rem;
		background-color: #fff;
		z-index: 1;
		bottom: 2px;
		transform: translateX(20%);
	    transition: transform .3s cubic-bezier(0.65, 0.05, 0.36, 1);
	}

    .ad {
    	position: absolute;
    	bottom: 0;
        width: 90%;
        margin: 0 auto;
    }

    .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 80%;
    margin: 0 auto;
    margin: 10%;

  }


</style>