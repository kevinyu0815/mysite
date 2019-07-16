var card = {
	props: ['item', 'type'],
	template: '#work',
}
Vue.component('card', card);

var work_app = new Vue({
	el:'#portfolio',
	data: {
		works: [],
	},
	created() {
    let works = this.works;
    // Time For Kid網站原型
    works.push({
			img: 'images/work-tfk.png',
			title: 'Time For Kid 網站原型',
			category: '跨界超越競賽',
			date: '108.04 ~ 108.05',
			skill: 'JavaScript、JQuery、localStorage應用',
			description: '負責前端部分，與設計組多次溝通、在短時間內做出網站原型<br>並實際與受測家庭進行產品測試與修正',
			btn: {
				link: 'https://kevinyu0815.github.io/transaction/template/start.html',
				word: '前往網站',
			}
    });
    // Vue電商作品
    works.push({
			img: 'images/work-ecommerce.png',
			title: 'Vue 電商網站',
			category: 'Vue個人作品',
			date: '108.06',
			skill: 'Vue、Vue CLI、Vue Router<br>Vue axios接後端API資料',
			description: '實作SPA電商網站，含登入、前台、管理後台',
			btn: {
				link: 'https://kevinyu0815.github.io/Vue_ecommerce',
				word: '前往網站',
			}
    });
    // Crobot資管專案
		works.push({
			img: 'images/work-mis.jpg',
			title: 'Crobot健康聊天機器人',
			category: '資管畢業專案',
			date: '107.01 ~ 107.06',
			skill: 'Python（Django框架）架設、部署網站',
			description: '網頁版本：負責前端頁面及登入註冊功能<br>Line版本： line messaging API串接及改寫',
			btn: {
				link: 'https://crobottest.herokuapp.com/',
				word: '前往網站',
			}
    });
    // JS遊戲
		works.push({
			img: 'images/work-puyuma.png',
			title: 'JS網頁遊戲 – 普悠瑪司機',
			category: 'JS期末遊戲專案',
			date: '107.11 ~ 108.01',
			skill: 'HTML、CreateJs',
			description: '負責主遊戲功能、最終程式整合，並獲得老師及同學票選「第一名」',
			btn: {
				link: 'https://puyumajs.herokuapp.com/test1/index.html',
				word: '前往網站',
			}
    });
    // 高雄旅遊網
		works.push({
			img: 'images/work-tourist.png',
			title: '高雄旅遊景點平台',
			category: 'JavaScript個人作品',
			date: '108.01',
			skill: '手刻CSS、JavaScript、AJAX',
			description: '抓取政府OpenData API，實作查詢旅遊景點功能',
			btn: {
				link: 'https://kevinyu0815.github.io/final_tourist/',
				word: '前往網站',
			}
		});
		// Vue todoList作品
		works.push({
			img: 'images/work-todolist.png',
			title: 'Vue TodoList',
			category: 'Vue個人作品',
			date: '108.02',
			skill: 'Vue、Bootstrap4',
			description: '實作新增、修改、刪除代辦事項等功能',
			btn: {
				link: 'https://kevinyu0815.github.io/todoList/',
				word: '前往網站',
			}
    });
    // BMI網站
		works.push({
			img: 'images/work-BMI.png',
			title: 'BMI計算器網站',
			category: 'JavaScript個人作品',
			date: '108.02',
			skill: '手刻CSS、JavaScript、localStorage應用',
			description: '實作計算BMI及判斷體位區間的功能，並使用localStorage將每筆資料儲存在瀏覽器中',
			btn: {
        link: 'https://kevinyu0815.github.io/BMI_calculator/',
				word: '前往網站',
			}
		});
    // Phone World專案
		works.push({
			img: 'images/work-dct.png',
			title: 'VR- PhoneWorld',
			category: '學程畢業製作',
			date: '107.09 ~ 108.06',
			skill: 'Unity、C# 、Steam VR API',
			description: '負責Unity 遊戲功能程式',
			btn: {
				link: 'https://www.youtube.com/watch?v=dEGKA-FW264&feature=youtu.be',
				word: 'Demo影片',
			}
    });
    // 人機互動專案
		works.push({
			img: 'images/wrok-design.png',
			title: '台北帶你Go APP設計',
			category: '人機介面設計',
			date: '107.10 ~ 108.01',
			skill: '人機互動、UX設計概念',
			description: '進行使用者訪談、原型製作及測試',
			btn: {
				link: 'files/人機互動設計.pdf',
				word: '設計展示',
			}
    });
    // City Run專案
		works.push({
			img: 'images/work-cityRun.jpg',
			title: 'CityRun桌機版遊戲',
			category: '學程程設期末專案',
			date: '106.11 ~ 107.01',
			skill: '以 Processing(Java) 製作小遊戲',
			description: '負責多項遊戲功能、團隊合作順利',
			btn: {
				link: 'https://www.youtube.com/watch?v=gKyDlELMIqs',
				word: 'Demo影片',
			}
		});
	},
});

var exp_app = new Vue({
	el: '#experience',
	data: {
		exp: [],
	},
	created() {
		let exp = this.exp;
		// 跨界超越競賽
		exp.push({
      img: 'images/exp-transaction.jpg',
			title: 'UX跨界超越競賽(獲第三名及HTC、和碩企業冠名獎)',
			category: '比賽',
			date: '107.09 ~ 108.06',
			skill: '根據使用者需求，設計產品「Time For Kid 」→ 讓小孩學習自我管理能力的電子桌遊',
			description: 'UX流程 (定義問題/訪談/原型設計/測試) 與設計組溝通，實際製作出網站原型',
			btn: {
				link: 'https://www.transactiontaiwan.org/',
				word: '比賽官網',
			}
		});
		// 實習
		exp.push({
			img: 'images/exp-intern.jpg',
			title: '國泰人壽 — 投資資訊部暑期實習',
			category: '實習',
			date: '107.07 ~ 107.08',
			skill: '前端優化（行動裝置、網站導覽功能）',
			description: 'RWD、Semantic UI框架、JQuery',
			btn: {
				link: 'files/實習成果.pdf',
				word: '成果報告',
			}
		});
		// 其他
		exp.push({
			img: 'images/exp-job.JPG',
			title: '打工社團經歷',
			category: '其他',
			date: '大二 ~ 大四',
			skill: '資管系系學會活動部長(一年)<br>政大交響樂團副公關(半年) <br>飛哥英文輔導老師(一年) <br>紐西蘭幼兒園工讀生(一年) <br>學生餐廳內外場工讀生(一年) <br>',
			description: '與人互動之溝通表達能力',
		});
	}
});

var navBar_app = new Vue({
  el: "#navBar",
  data: {
    active: 1,
  }
});










