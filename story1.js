/* 剧本数据 Part 1：序章 + 宗门篇 + 秘境开启 + 蚀樾线 + 宋敛线 */
const STORY = {};

/* ================= 序章：重生 ================= */
STORY.p1 = {bg:'assets/bg_cave.png', who:'none', text:'前世，你是灵药宗丹道第一人，"玉露仙子"聂霜月。\n纯阴之体的秘密泄露那日，未婚夫夏家为了攀附魔渊，亲手把你装进了囚灵车。师门沉默，众人避让——寒潭三年，你元神俱损而亡。', next:'p2'};
STORY.p2 = {bg:'assets/bg_cave.png', who:'none', text:'死前最后一刻，有个红衣少年提剑闯进寒潭，浑身是血地朝你伸手。\n你没能等到他的名字。\n再睁眼，山道岔口，桃花纷落。你回到了八岁那年——云游的合欢宗宗主云蘅夫人，正微笑着向你伸出手。', next:'p3'};
STORY.p3 = {who:'yunheng', spr:'yunheng', text:'"小丫头，我可闻到你骨子里那股子天生的花香。\n跟我回沧幽谷吧——这一世，谁也别想做你的炉鼎。"', next:'p4'};
STORY.p4 = {bg:'assets/bg_hehuan.png', who:'none', text:'二十年弹指过。\n如今你是合欢宗大师姐，丹道与合欢功法双绝，纯阴之体被你修成了"以情御体"的利刃。\n仙武历年 3850 年，三百年一度的仙武秘境将启。而你重生的秘密、前世的仇局，都将在月崖谷云雾深处，重新开盘。', next:'p5'};
STORY.p5 = {who:'heroine', spr:'heroine', text:'（这一世，我要活得漂亮。要那些欠我的人加倍偿还，要真心待我的人得偿所愿。）\n——先想想怎么应付眼前这群围着你转的家伙吧，大师姐。', next:'c_tone'};
STORY.c_tone = {bg:'assets/bg_hehuan.png', who:'none', text:'宗门晨课开始前，小师妹们好奇地围上来打量你。今天的你，打算以什么姿态示人？', choices:[
  {t:'温婉含笑，四两拨千斤', sub:'大师姐的体面，一分不少', set:{tone:'gentle'}, next:'ch1_1'},
  {t:'打个哈欠，摸出蜜饯', sub:'辟谷归辟谷，甜是真甜', set:{tone:'sweet'}, next:'ch1_1'},
  {t:'眉眼一挑，锋芒毕露', sub:'重生之人，懒得再演', set:{tone:'sharp'}, next:'ch1_1'},
]};

/* ================= 第一章：合欢宗立足 ================= */
STORY.ch1_1 = {bg:'assets/bg_hehuan.png', who:'songlian', spr:'songlian', text:'"师姐师姐！南边商队新到的桂花糖，我给你留了三包！"\n小师弟宋敛从廊柱后钻出来，松绿衣衫，狗狗眼里全是亮晶晶的讨好。', next:'ch1_2'};
STORY.ch1_2 = {bg:'assets/bg_hehuan.png', who:'none', text:'案头堆着的东西越来越离谱：千机阁少阁主问栩的问安信、万剑宗大师兄洛惊澜第五封约战书、还有一纸玄色封皮的——夏家退婚书。\n退婚书上"夏懿"两个签名，笔锋慵懒散漫。\n（前世他把婚约拖到死，今生倒是利落。也好。）', next:'c_ch1'};
STORY.c_ch1 = {who:'none', text:'宋敛眼巴巴看着你拆糖，欲言又止。', choices:[
  {t:'分他一颗糖', sub:'喂小的，是大师姐的基本修养', aff:{songlian:3}, next:'ch1_3'},
  {t:'敲他脑门："又乱花钱"', sub:'凶完再塞两颗回去', aff:{songlian:2}, next:'ch1_3'},
  {t:'全收下："替我谢过商队"', sub:'白得三包糖，很合理', aff:{songlian:1}, next:'ch1_3'},
]};
STORY.ch1_3 = {who:'songlian', spr:'songlian', text:'"师姐对我最好了！"他笑出一口小白牙，转身时袖中滑出半张符纸——是一张烧了一半的姻缘帖，夏家祖祠的样式。\n你假装没看见。\n（这位乖巧小师弟的袖子里，藏着的东西可不止糖。）', next:'ch1_4'};
STORY.ch1_4 = {bg:'assets/bg_hehuan.png', who:'none', text:'三日后，仙盟大典。五大宗齐聚。\n丹霞谷圣女柳絮当众发难："听说合欢宗大师姐徒有虚名，靠脸混进秘境名额？不如当众炼一炉丹，也让诸位开开眼。"\n满座哗然。', next:'c_ch1b'};
STORY.c_ch1b = {who:'heroine', spr:'heroine', text:'（柳絮。前世她踩着你的名声上位。这一世，倒省了你找她。）', choices:[
  {t:'温温柔柔："好啊，就怕妹妹的炉子接不住。"', sub:'杀人，用微笑', aff:{songlian:2}, next:'ch1_5'},
  {t:'懒得看她，直接上手炼', sub:'实力是最好的耳光', aff:{wenxu:2,luojinglan:2}, next:'ch1_5'},
  {t:'"比丹道？不如比比谁先在秘境活下来。"', sub:'把场子挪到你的主场', aff:{shiyue:2}, next:'ch1_5'},
]};
STORY.ch1_5 = {bg:'assets/bg_hehuan.png', who:'none', text:'九转凝露丹成，丹香三里，霞光贯顶。\n柳絮脸色青白，仙盟长老齐声喝彩。观礼席上——\n问栩搁下茶盏，眼底漾开笑意；洛惊澜"啧"了一声，耳朵却红了；而人群最后一排，一个黑袍身影冲你挑了挑眉，无声口型："本尊看好你。"\n魔尊蚀樾，竟也来了。', next:'ch1_6'};
STORY.ch1_6 = {who:'heroine', spr:'heroine', text:'（蚀樾……前世寒潭边那个红衣少年，是他吗？\n重生以来，这个名字总在你心口隐隐发烫。）\n大典散场，你被五位目光截然不同的男人围在中间。\n而仙武秘境的传送阵，已经在月崖谷亮起。', next:'ch2_1'};

/* ================= 第二章：秘境开启 ================= */
STORY.ch2_1 = {bg:'assets/bg_secret.png', who:'none', text:'月崖谷。传送阵灵光如瀑，各宗修士鱼贯而入。\n秘境有灵，会观察每个闯入者——机缘、试探、劫难，皆因人而异。\n入口前，风卷起你的衣角。', next:'c_ch2'};
STORY.c_ch2 = {who:'none', text:'入阵前最后一步，你忽然心有所感。', choices:[
  {t:'随众而行，稳中求进', sub:'机缘留给有准备的人', next:'ch2_select'},
  {t:'独自探入谷侧幽径', sub:'心魔深处，似有旧梦低语', next:'ch2_lost'},
]};
STORY.ch2_lost = {bg:'assets/bg_cave.png', who:'none', text:'幽径深处灵雾弥漫，你竟辨不清来路。雾中有模糊的人影来去，像前世的旧梦在招手。', next:'c_ch2b'};
STORY.c_ch2b = {who:'none', text:'雾越来越浓。', choices:[
  {t:'定了定神，循灵光原路返回', sub:'来日方长', next:'ch2_select'},
  {t:'闭眼，任由雾气引路', sub:'……随它去吧', next:'se_mizong'},
]};
STORY.ch2_select = {bg:'assets/bg_secret.png', who:'none', text:'仙武秘境的画卷已在眼前展开，前路漫漫，机缘与心动并存。\n你将首先牵动哪一根命运红线？（选择攻略线，其余角色好感仍可在后续相遇中积累）', choices:[
  {t:'幽暗处，重伤的红衣"少年"', sub:'蚀樾 · 魔渊线｜他像极了前世寒潭边的人', next:'sy1'},
  {t:'蛊阵中央，面色潮红的你师弟', sub:'宋敛 · 宗门线｜他找了你三天三夜', next:'sl1'},
  {t:'妖兽围攻中，横剑而入的白衣人', sub:'问栩 · 千机阁线｜"我们的相遇是命中注定"', next:'wx1'},
  {t:'幻境镇上，一同"失忆"的慵懒符师', sub:'夏懿 · 符箓宗线｜幻境里，你们只是凡人', next:'xy1'},
  {t:'剑冢之上，红衣执剑的万剑宗大师兄', sub:'洛惊澜 · 万剑宗线｜"输了的人要听赢家一句话"', next:'lj1'},
]};

/* ================= 蚀樾线 ================= */
STORY.sy1 = {bg:'assets/bg_cave.png', who:'none', text:'秘境幽暗处，荧光菌菇照见一抹倒伏的红衣。\n少年模样的他锁骨贯着断刃，气若游丝，偏偏那双眼在你看来的瞬间轻轻弯了弯——像 등了很多年的狐狸，终于等到了猎物自己走进来。\n那张脸，和前世寒潭边的红衣少年，分毫不差。', next:'c_sy1'};
STORY.c_sy1 = {who:'heroine', spr:'heroine', text:'（是他？还是巧合？）', choices:[
  {t:'"别动，我看看伤口。"', sub:'救人是合欢宗的规矩——顺便验验他', aff:{shiyue:3}, flag:'sy_saved', next:'sy2'},
  {t:'喂他一颗丹药，退开三步戒备', sub:'救归救，防归防', aff:{shiyue:2}, flag:'sy_saved', next:'sy2'},
  {t:'"装可怜前，先把杀气收一收。"', sub:'你可不是好糊弄的小白花', aff:{shiyue:3}, flag:'sy_seen', next:'sy2'},
]};
STORY.sy2 = {who:'shiyue', spr:'shiyue', text:'他伤愈后不肯走，变着法儿地赖着你：采药要跟着，烤鱼要分半，夜里还要"怕黑"。\n某夜你假寐，察觉指尖一缕纯阴之气正被缓缓抽走——他蜷在你身侧，红瞳半阖，贪婪又克制。\n被你捉个正着，他也不慌，笑吟吟："月月，再借本尊一点。利息，本尊拿命还。"', next:'c_sy2'};
STORY.c_sy2 = {who:'none', text:'（月月？他还记得？）', choices:[
  {t:'"利息太轻。你欠的，要用一辈子还。"', sub:'顺势拿捏这只狐狸', aff:{shiyue:4}, flag:'sy_pact', next:'sy3'},
  {t:'装睡不揭穿', sub:'各取所需，心照不宣', aff:{shiyue:2}, next:'sy3'},
  {t:'坐起来冷笑："魔尊大人，戏演够了？"', sub:'掀了他的底牌', aff:{shiyue:3}, flag:'sy_seen', next:'sy3'},
]};
STORY.sy3 = {bg:'assets/bg_secret.png', who:'none', text:'魔渊追兵破空而至——他们尊他一声"魔尊"，又叛他、要他的命。\n黑袍猎猎，他把你拢进身后，掌心魔气翻涌如潮："退后。本尊的月亮，谁也别想碰。"\n尸山血海里杀出来的男人，为你一个人挡了满天刀光。', next:'c_sy3'};
STORY.c_sy3 = {who:'none', text:'他背上添了三道深可见骨的伤，回头冲你笑得漫不经心。', choices:[
  {t:'撕下裙裾替他包扎："疯子。"', sub:'手在抖，嘴很硬', aff:{shiyue:4}, next:'sy4'},
  {t:'"魔尊的命也值钱得很，省着点用。"', sub:'嘴上嫌，丹药管够', aff:{shiyue:3}, next:'sy4'},
  {t:'后退半步："魔渊的事，我合欢宗不掺和。"', sub:'划清界限，各走各路', flag:'sy_cold', aff:{shiyue:-2}, next:'sy3b'},
]};
STORY.sy3b = {who:'shiyue', spr:'shiyue', text:'他愣了一瞬，随即笑了，笑意未达眼底："好，好得很。"\n那夜之后，幽暗处再没有红衣少年赖着你要烤鱼。\n只有魔渊的传闻里，新继位的魔尊一夜屠了三座叛城，眸色比血还冷。', next:'ne_jianghu'};
STORY.sy4 = {bg:'assets/bg_bed.png', who:'none', text:'伤愈那夜，他引你去魔渊行宫。烛影千重，红帐如血。\n"月月。"他忽然跪坐在你面前，褪去所有狂狷，"前世寒潭，救我三个月的人是你。吸你灵气续命的人，也是我。"\n"这条命本来就是你的。你要拿去炼丹、做药引、垫桌脚，都随你——只求你拿的时候，看着我。"', next:'c_sy4'};
STORY.c_sy4 = {who:'heroine', spr:'heroine', text:'（前世你死在他怀里都没来得及说的一句话，他等了两世。）', choices:[
  {t:'"傻子。谁要你的命，我要你这个人。"', aff:{shiyue:5}, flag:'sy_love', next:'sy5'},
  {t:'"先说好，魔宫的账本以后归我管。"', sub:'先拿到掌家权再说', aff:{shiyue:4}, flag:'sy_love', next:'sy5'},
  {t:'"……容我想想。"', sub:'前世的心魔，没那么容易散', aff:{shiyue:1}, next:'sy4b'},
]};
STORY.sy4b = {who:'shiyue', spr:'shiyue', text:'他眼里的光暗了暗，仍是笑："本尊等得起。"\n只是那晚他离开的脚步声，比来时轻了许多，像怕惊碎什么。', next:'sy5'};
STORY.sy5 = {bg:'assets/bg_bed.png', who:'none', text:'三日后，魔渊双修大典的请帖送到你案头，满座修仙界哗然——魔尊立后，对象是合欢宗大师姐。\n大典前夜，红帐烛暖，合欢花香漫过窗棂。他屏退左右，只余你们二人，与一炉沉水香。\n\n他俯身，将你散落的发丝别到耳后，指尖微凉，呼吸却烫："月月，纯阴之体若与纯阳相合，灵力会自行寻路。疼了便咬我。"\n红烛噗地一跳，纱帐垂落如潮。他的灵力自你十指缓缓渡入，像温泉漫过骨缝——你的纯阴之气与他纠缠着攀上脊背，化作一缕金红交缠的光，在帐顶盘旋、升腾。\n呼吸交叠的刹那，前世寒潭的冷被这一刻的暖一寸寸熨平。他抵着你额心，声音哑得不成样子："两世了……本尊终于，名正言顺。"\n帐外花雨落了整夜，帐内灵光融成一片温柔的海。', gate:true, alt:'sy5_safe', next:'sy6'};
STORY.sy5_safe = {bg:'assets/bg_bed.png', who:'none', text:'烛影摇红，他执起你的手，一枚墨玉魔戒套上你的无名指。\n"本尊的江山、本尊的命、本尊往后的每一夜，都押给你了。"\n他只是将你轻轻拢进怀里，下颌抵着你的发顶，灵力温柔相绕，像两滴水融进同一片海。帐外花雨落了整夜，帐内誓言说尽，相拥而眠。', next:'sy6'};
STORY.sy6 = {bg:'assets/bg_bed.png', who:'none', text:'大婚当日，魔渊倾国，红妆百里。\n夏家的囚灵车旧案被当众翻出——前世把你送进寒潭的每一位"贵人"，如今跪在魔宫阶下瑟瑟发抖。\n蚀樾坐在你身侧，十指相扣，声音传遍九霄："魔后的债，本尊亲自讨。"', next:'fin_shiyue'};

/* ================= 宋敛线 ================= */
STORY.sl1 = {bg:'assets/bg_town.png', who:'none', text:'秘境中的凡间小镇，你循着甜香拐进巷子，却撞见不该出现的一幕——\n宋敛笑吟吟地递给某位追求者一包"安神香"，声音甜甜的："师兄每晚点一炷，保准夜夜好梦。"\n那香你认得，闻着安神，实则会让人对合欢宗产生深深的敬畏，再也不敢上门。', next:'c_sl1'};
STORY.c_sl1 = {who:'none', text:'他背对着你，浑然不觉东窗事发。', choices:[
  {t:'凑到他耳边："师弟，香卖我一份？"', sub:'看他当场石化', aff:{songlian:3}, flag:'sl_caught', next:'sl2'},
  {t:'默默记下，转身买糖', sub:'给他留三分体面', aff:{songlian:1}, next:'sl2'},
  {t:'大笑着拍他肩："干得好！下个也安排上。"', sub:'师姐带头使坏', aff:{songlian:4}, flag:'sl_caught', next:'sl2'},
]};
STORY.sl2 = {bg:'assets/bg_hehuan.png', who:'songlian', spr:'songlian', text:'回到宗门，他"偶感风寒"病倒了，烧得脸颊通红，还攥着你袖口不撒手："师姐……别走，我怕……"\n像小时候一样。像很多年前那个谎称怕黑、只为和你同塌而眠的小逃荒儿一样。\n只是这次你注意到，他枕下压着一张写了一半的方子——不是治风寒的，是情丝香的引子：闻者入梦，梦者见心。', next:'c_sl2'};
STORY.c_sl2 = {who:'none', text:'（他想让你梦见……谁？）', choices:[
  {t:'替他掖好被角，把方子原样放回', sub:'装作什么都没看见', aff:{songlian:2}, next:'sl3'},
  {t:'第二日照常照顾他，茶里多加了颗蜜枣', sub:'用甜味回应他的心事', aff:{songlian:3}, next:'sl3'},
  {t:'把方子拍在他面前："解释一下？"', sub:'逼他摊牌', aff:{songlian:2}, flag:'sl_confront', next:'sl3'},
]};
STORY.sl3 = {who:'songlian', spr:'songlian', text:'病愈后他判若两人似的安静。直到南疆旧识寻上门来，当着你的面唤他"三殿下"。\n——南疆皇子，当年逃难被你从人牙子手里救下的"灾民"。\n他跪在雨里，狗狗眼通红："师姐，身份是假的，怕黑是装的，只有喜欢你是真的。"\n"前世……不对，是很久以前有人告诉我，喜欢一个人，要等她先开口。我就一直等。"', next:'c_sl3'};
STORY.c_sl3 = {who:'heroine', spr:'heroine', text:'（雨里的少年，睫毛都在抖。）', choices:[
  {t:'撑伞蹲下："起来。师姐罩你。"', aff:{songlian:5}, flag:'sl_love', next:'sl4'},
  {t:'"先起来，感冒了没人照顾你。"', sub:'嘴硬心软', aff:{songlian:3}, flag:'sl_love', next:'sl4'},
  {t:'"你的心意，我心领了。以后别这样了。"', sub:'有些距离，必须划清', flag:'sl_reject', aff:{songlian:-3}, next:'sl3b'},
]};
STORY.sl3b = {bg:'assets/bg_town.png', who:'none', text:'你转身走进雨里，没再回头。\n后来南疆来了封信，说三殿下回国主政，勤政爱民，只是宫中从此不设香炉。\n有个小道消息：他书房抽屉里锁着一包桂花糖，再没人打开过。', next:'be_fanshi'};
STORY.sl4 = {bg:'assets/bg_hehuan.png', who:'none', text:'身份揭穿后，他反而不装了。给你递糖时手指不再抖，站在你身边时腰背挺得笔直。\n花房夜，合欢花开到最盛，满室甜香浮动。他把最后一炷情丝香点燃——这一炉再无半分蛊术，只有安神的花气。\n\n"师姐，"他跪坐在你身侧，指尖悬在你腕间，又怕烫着你似的没敢落，"我学合欢宗的功法，其实只学到一半……剩下那一半，想留给你教。"\n香气氤氲里，他终于握住你的手。合欢宗的双修之法自指尖缓缓流转，像春溪漫过冻土——他的灵力暖，你的灵力柔，交缠着爬上心口，把那些年他藏着不敢说的喜欢，一寸寸焐成了实打实的温度。\n他额头抵着你的肩，呼吸发颤："原来……是真的。"\n"什么真的？"\n"喜欢你这件事。"花影摇曳，月光把两个人的影子叠在了一起。', gate:true, alt:'sl4_safe', next:'sl5'};
STORY.sl4_safe = {bg:'assets/bg_hehuan.png', who:'none', text:'你们并肩坐在花房藤架下，他把最后一包桂花糖分成两半，一半推给你。\n"师姐，以后我的糖，都分你一半。"\n花影摇曳，月光把两个人的影子叠在一起。', next:'sl5'};
STORY.sl5 = {bg:'assets/bg_hehuan.png', who:'none', text:'南疆国书送达：三殿下宋敛，携国库半数聘礼，向合欢宗大师姐正式求娶。\n云蘅夫人笑眯眯把决定权丢给你："徒儿，这小子，你要不要？"', next:'c_sl5'};
STORY.c_sl5 = {who:'none', text:'满宗门的师妹们扒着窗户围观。', choices:[
  {t:'"要。让他把聘礼单子也归我管。"', sub:'宠夫狂魔，从管钱开始', aff:{songlian:5}, next:'fin_songlian'},
  {t:'"让他自己来问我。"', sub:'等他亲口说第三遍', aff:{songlian:4}, next:'fin_songlian'},
]};

/* story1 end */
