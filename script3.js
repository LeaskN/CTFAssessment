const { JSDOM } = require('jsdom');

function findHiddenURL(node, result) {
  if (node.nodeType === 1) { // 1 represents ELEMENT_NODE
    const dataTag = node.getAttribute('data-tag');
    if (dataTag) {
      // Check if the data-tag contains asterisks
      if (!dataTag.includes('*')) {
        // If no asterisks are present, append it to the result
        result.push(dataTag);
      }
    }
    for (let i = 0; i < node.childNodes.length; i++) {
      findHiddenURL(node.childNodes[i], result);
    }
  } else if (node.nodeType === 3) { // 3 represents TEXT_NODE
    result.push(node.textContent);
  }
}

function extractHiddenURL(html) {
  const dom = new JSDOM(html);
  const result = [];

  findHiddenURL(dom.window.document.documentElement, result);

  // Concatenate the result to get the hidden URL and remove asterisks
  const hiddenURL = result.join('').replace(/\*/g, '');

  return hiddenURL;
}

// Example usage:
const html = `
<!DOCTYPE html>
<html>

<head>
	<title>Ramp - Frontend Challenge</title>
	<style type="text/css">
		ul,
		ol,
		li,
		div,
		span {
			display: none
		}
	</style>
</head>

<body>
	<h1>Capture the flag!</h1>
	<code class="ramp" value="00lzyx14cc" data-class="23q5bjcyehtk"><div class="ramp" value="dwihcvsjkx" data-tag="r75xlcgc9d93"><section class="ramp" value="x195ddtuug" data-id="bhhnv315"><article class="ramp char" value="5"></article><i class="ramp char" value="t"></i></section><span class="ramp" value="3tu274erw0" data-id="qznre215"><i class="ramp char" value="h"></i><section class="ramp char" value="g"></section></span></div></code>
	<section class="ramp" value="la13rhd93a" data-class="29hri92ekcut">
		<div class="ramp" value="8dzdg388wx" data-tag="3iwsqsnavn93">
			<section class="ramp" value="h2mh77xjce" data-id="zicya305">
				<article class="ramp char" value="u"></article><i class="ramp char" value="a"></i>
			</section>
			<span class="ramp" value="oc1eiq968g" data-id="prtow215"><i class="ramp char" value="w"></i><section class="ramp char" value="-"></section></span>
		</div>
	</section>
	<code class="ramp" value="ho5e7pdner" data-class="23wvrj8mnhoc"><div class="ramp" value="ncusf74lcv" data-tag="j5qum8apzo93"><span class="ramp" value="ampblwgsiu" data-id="tnu6h215"><i class="ramp char" value="t"></i><section class="ramp char" value="0"></section></span><section class="ramp" value="vh168zvwjm" data-id="d01xd275"><i class="ramp char" value="w"></i><article class="ramp char" value="u"></article></section></div></code><code class="ramp" value="s60pxyp9pp" data-class="23m1kb5q5j8w"><div class="ramp" value="jbe1g9twtg" data-tag="2mkme84tc493"><section class="ramp" value="wbj96ytvvm" data-id="9qxd5255"><i class="ramp char" value="j"></i></section><span class="ramp" value="hscf1y7pv6" data-id="0km0a215"><i class="ramp char" value="t"></i><section class="ramp char" value="g"></section></span></div></code><code class="ramp" value="bzc0tejexf" data-class="23mykz65doqw"><div class="ramp" value="nqqt8x4axn" data-tag="jqa0n7enhf93"><span class="ramp" value="nx8x03o10h" data-id="wnmhw215"><i class="ramp char" value="p"></i><section class="ramp char" value="a"></section></span></div></code>
	<section class="ramp" value="m3d3t5fv5m" data-class="27d466ic3fil">
		<div class="ramp" value="uphko661pg" data-tag="gjqtwzfa8493">
			<article class="ramp" value="pt0sonvtci" data-id="02fqp265"><i class="ramp char" value="a"></i></article>
			<span class="ramp" value="bwsrnfvjfl" data-id="b73mo215"><i class="ramp char" value="u"></i><article class="ramp char" value=":"></article></span>
		</div>
		<article class="ramp" value="z0w1lvu5lp" data-tag="s4k38pptls103">
			<span class="ramp" value="taxbe9s3qw" data-id="u5do6215"><section class="ramp char" value="l"></section><i class="ramp char" value="q"></i></span>
			<section class="ramp" value="dhjlbllw1u" data-id="y15o8245"><i class="ramp char" value="."></i>
				<article class="ramp char" value="t"></article>
			</section>
		</article>
	</section>
	<code class="ramp" value="s64fezegnp" data-class="23j4018l6trw"><div class="ramp" value="9o0xnit1nz" data-tag="cy395ne76493"><article class="ramp" value="23cq8g0i33" data-id="f0a1n235"><i class="ramp char" value="t"></i><article class="ramp char" value="/"></article></article><span class="ramp" value="af5wycybfo" data-id="ai2nv214.5"><article class="ramp char" value="n"></article><i class="ramp char" value="s"></i></span></div></code><code class="ramp" value="a5heazp3mr" data-class="231r4c4v0l5n"><div class="ramp" value="6dx3hps56d" data-tag="wfxv87r7z493"><span class="ramp" value="ryfl4jhswq" data-id="zot25215"><i class="ramp char" value=":"></i><article class="ramp char" value="5"></article></span></div></code><code class="ramp" value="fpleiijgnt" data-class="23j65u0w68k5"><div class="ramp" value="4mb0bt7im7" data-tag="q927edoaxr93"><span class="ramp" value="bl4ur4ypbd" data-id="j15ky215"><i class="ramp char" value="/"></i></span><article class="ramp" value="w5zfrxi485" data-id="g9m6b225"><section class="ramp char" value="3"></section><i class="ramp char" value="i"></i></article></div></code><code class="ramp" value="6mjdrpgq44" data-class="23ktnlifmjyt"><div class="ramp" value="31cinkgqg7" data-tag="xig21n028193"><span class="ramp" value="8yyiw75b84" data-id="d8j1w215"><article class="ramp char" value="p"></article><i class="ramp char" value="/"></i></span></div></code><code class="ramp" value="89sit8buv1" data-class="23b8xd93zte5"><div class="ramp" value="d3xf0px1fh" data-tag="n9i4jvzfnf93"><span class="ramp" value="kyaa5te8k4" data-id="vp69i215"><section class="ramp char" value="s"></section><i class="ramp char" value="w"></i></span><article class="ramp" value="ike8t07kty" data-id="vyc7q255"><i class="ramp char" value="a"></i></article></div></code><code class="ramp" value="pt4jcffw9n" data-class="239kq1xp8j0o"><article class="ramp" value="2pfv1z0nc2" data-tag="p1q3foy5b898"><section class="ramp" value="xs5idkybsw" data-id="4u0e8295"><i class="ramp char" value="s"></i><section class="ramp char" value="n"></section></section><span class="ramp" value="g86f5l0j6r" data-id="j51ev215"><i class="ramp char" value="t"></i></span></article><div class="ramp" value="za3n07ksnj" data-tag="klthunasb593"><span class="ramp" value="631ljue7dh" data-id="dsovc215"><i class="ramp char" value="g"></i></span></div></code><code class="ramp" value="epk7if259o" data-class="23j9nk9uv01o"><article class="ramp" value="8h87sjqn7d" data-tag="e4unbm0exh101"><section class="ramp" value="esm14ank0r" data-id="jdg25275"><section class="ramp char" value="w"></section><i class="ramp char" value="d"></i></section><span class="ramp" value="afiyluwkkx" data-id="148km215"><i class="ramp char" value="h"></i><section class="ramp char" value="a"></section></span></article><div class="ramp" value="f03cq2olpp" data-tag="zmxdp7zs5a93"><span class="ramp" value="xa3tlq13pk" data-id="m4uju215"><i class="ramp char" value="g"></i></span></div></code><code class="ramp" value="utmjcurdng" data-class="23irnm2zs8r9"><div class="ramp" value="fdpmase11i" data-tag="7iaph9iap793"><span class="ramp" value="puelfq2rue" data-id="eqjl8215"><i class="ramp char" value="5"></i><article class="ramp char" value="w"></article></span><article class="ramp" value="92oqcnhkpo" data-id="x67ib235"><i class="ramp char" value="."></i></article></div><section class="ramp" value="by0zoqh29i" data-tag="2ujijiheyi94"><article class="ramp" value="ffhleqsmvi" data-id="knvvr225"><section class="ramp char" value="q"></section><i class="ramp char" value="u"></i></article><span class="ramp" value="9c19d9y747" data-id="xhyn7215"><i class="ramp char" value="5"></i><article class="ramp char" value="h"></article></span></section></code>
	<section class="ramp" value="t6vsywtoua" data-class="25hm6pj704ls">
		<div class="ramp" value="cbc9k8ll72" data-tag="cthyhm0oa793">
			<span class="ramp" value="314b64p9bc" data-id="tzybe215"><i class="ramp char" value="/"></i></span></div>
	</section>
	<code class="ramp" value="4btpfa03tc" data-class="23c8p371xlqb"><div class="ramp" value="ie17guw8q9" data-tag="h7g339ymze93"><span class="ramp" value="zdih12u4tz" data-id="exge5215"><i class="ramp char" value="2"></i></span><section class="ramp" value="rajfo220vz" data-id="d7edw265"><i class="ramp char" value="l"></i><section class="ramp char" value="s"></section></section></div><section class="ramp" value="itmbdxth72" data-tag="cmkmflbciv94"><span class="ramp" value="eef7m4ej4n" data-id="066di215"><i class="ramp char" value="."></i></span></section></code><code class="ramp" value="o4mcxzf0x5" data-class="23delay4qxvt"><article class="ramp" value="jp7bv197ny" data-tag="ub2m71ywie102"><section class="ramp" value="ihwx6vyokq" data-id="tu0ha295"><i class="ramp char" value="/"></i></section><span class="ramp" value="re53yzg3w6" data-id="tryao215"><i class="ramp char" value="a"></i></span></article><div class="ramp" value="hz92o75tk2" data-tag="n3lptwias93"><span class="ramp" value="12txof828j" data-id="71wn2215"><i class="ramp char" value="2"></i></span></div></code><code class="ramp" value="omjk0girui" data-class="232hd46nici0"><div class="ramp" value="1qrqq9qknf" data-tag="30ey6fna7m93"><span class="ramp" value="2x11cgi3m9" data-id="47eqf215"><i class="ramp char" value="p"></i><article class="ramp char" value="h"></article></span><section class="ramp" value="yr3sl30dck" data-id="r6xup315"><i class="ramp char" value="r"></i></section></div></code><code class="ramp" value="urqgmnae7o" data-class="23ky2c5lcqnv"><div class="ramp" value="twa3qiq2gu" data-tag="7mmgybavio93"><section class="ramp" value="sxvotgkxka" data-id="cxaj1225"><article class="ramp char" value="."></article><i class="ramp char" value="s"></i></section><span class="ramp" value="h006ktn1wg" data-id="wti5n215"><i class="ramp char" value="w"></i></span></div></code><code class="ramp" value="eyclhyxh2z" data-class="231xno3bkzin"><div class="ramp" value="fe1ctuml4h" data-tag="xem14g5mf693"><span class="ramp" value="sbjw8hy4oe" data-id="p85qg215"><i class="ramp char" value="i"></i></span><article class="ramp" value="spyrvulpwz" data-id="pu7r3275"><i class="ramp char" value="1"></i></article></div></code>
	<section class="ramp" value="bg84i2sk4t" data-class="24ibb1akl9o6">
		<div class="ramp" value="7pixdddqg1" data-tag="9wfas3703k93">
			<span class="ramp" value="bc4am1dmkf" data-id="vryjs215"><i class="ramp char" value="u"></i></span></div>
		<section class="ramp" value="16s9owdfdv" data-tag="bzh0fs3k85103">
			<article class="ramp" value="r32en6ttep" data-id="v2hkj285"><i class="ramp char" value="l"></i></article>
			<span class="ramp" value="v5hgigk154" data-id="figuh215"><i class="ramp char" value="0"></i></span>
		</section>
	</section>
	<code class="ramp" value="y99qmt6mir" data-class="23qlt2ph9l4z"><div class="ramp" value="6iknc2jw9b" data-tag="ffs09o0u4g93"><span class="ramp" value="ywjkth7n9i" data-id="k31ha215"><i class="ramp char" value="v"></i><article class="ramp char" value="t"></article></span></div></code><code class="ramp" value="k9w0n8nfr5" data-class="23jo1utfu0yn"><article class="ramp" value="ahp4b9uh85" data-tag="t1knholbgh96"><span class="ramp" value="fyyzxohsmm" data-id="6mfxr215"><i class="ramp char" value="."></i></span></article><div class="ramp" value="gd8d1d6itr" data-tag="7x8wzv8yyg93"><span class="ramp" value="6lwd445o9d" data-id="biit9215"><i class="ramp char" value="h"></i></span></div></code><code class="ramp" value="6kcy70jyy0" data-class="23z3t6b0nuk3"><section class="ramp" value="pvj7uu97e7" data-tag="dlo7rldtht95"><span class="ramp" value="v1wwholgwv" data-id="xewg7215"><i class="ramp char" value="5"></i></span></section><div class="ramp" value="dlki79ieze" data-tag="nh6q42vs4493"><span class="ramp" value="btixkqp5cb" data-id="srpw7215"><i class="ramp char" value="v"></i></span><article class="ramp" value="5y7ab5g9e8" data-id="lcphr225"><i class="ramp char" value="5"></i></article></div></code><code class="ramp" value="ahkowdal3m" data-class="23m8699ddd5q"><div class="ramp" value="zej439qwlb" data-tag="if5kus39uy93"><article class="ramp" value="lelgschdaq" data-id="i1ex0305"><i class="ramp char" value="b"></i></article><span class="ramp" value="qcjhmpgfnu" data-id="c51p5215"><i class="ramp char" value="i"></i><section class="ramp char" value="5"></section></span></div></code><code class="ramp" value="5fcfcht4y4" data-class="23enbpqk42sy"><div class="ramp" value="91a2p4f683" data-tag="1thkdg3e8f93"><span class="ramp" value="w7o5o4yg7n" data-id="u9hcw215"><i class="ramp char" value="5"></i></span><article class="ramp" value="s2ukx1xffs" data-id="t31d6265"><i class="ramp char" value="d"></i></article></div></code>
	<section class="ramp" value="7klknlfn1p" data-class="31t0ibfkm9u8">
		<div class="ramp" value="kfm6wlapqz" data-tag="ae05nhfujs93">
			<span class="ramp" value="erpjenxaj3" data-id="46p10215"><i class="ramp char" value="d"></i></span></div>
	</section>
	<code class="ramp" value="bswdxaaxdp" data-class="23m9ilz7iu0g"><div class="ramp" value="2aeaefo5j3" data-tag="ifj18sqeu493"><span class="ramp" value="7yw0dizjea" data-id="fv8od215"><article class="ramp char" value="w"></article><i class="ramp char" value="g"></i></span><section class="ramp" value="03qqe1z4a3" data-id="vazb1245"><i class="ramp char" value="w"></i><section class="ramp char" value="a"></section></section></div><article class="ramp" value="n1ocqwsa8j" data-tag="jncpn20fw596"><span class="ramp" value="zwv4d3o3yj" data-id="hxoww215"><i class="ramp char" value="n"></i></span></article></code>
	<article class="ramp" value="1pqw9utc79" data-class="25ezf5s4aevr">
		<div class="ramp" value="gkxambuvxb" data-tag="ms8wlaoos593">
			<span class="ramp" value="hnuhbxwvtw" data-id="9swtl215"><i class="ramp char" value="i"></i></span></div>
		<section class="ramp" value="daq7qps6et" data-tag="zsh0xz6xp695">
			<span class="ramp" value="4yrhvl4viu" data-id="p1djg215"><article class="ramp char" value="s"></article><i class="ramp char" value="5"></i></span>
		</section>
	</article>
	<code class="ramp" value="bp3wah2kec" data-class="23m9wac4utew"><div class="ramp" value="111thlrj54" data-tag="rplnv9fxq093"><span class="ramp" value="b9s3npxww2" data-id="o75dg215"><i class="ramp char" value="q"></i></span></div><article class="ramp" value="awroz4pgxm" data-tag="yduodjcpkl97"><span class="ramp" value="9d5i5ev043" data-id="am25o215"><i class="ramp char" value="s"></i></span></article></code><code class="ramp" value="irz6jv4rkm" data-class="2369p68l9l8m"><div class="ramp" value="hnghel6vq7" data-tag="52h8wos1dg93"><span class="ramp" value="3p40zrsbjk" data-id="oitvj215"><section class="ramp char" value="w"></section><i class="ramp char" value="s"></i></span><section class="ramp" value="szqyq3054q" data-id="gv6ne315"><i class="ramp char" value="a"></i></section></div></code>
	<article class="ramp" value="f9h0m2r5yd" data-class="31925rofomps">
		<div class="ramp" value="05bci6g0l8" data-tag="41a3hkliv893">
			<section class="ramp" value="v234qx0009" data-id="c9it5265"><i class="ramp char" value="/"></i></section>
			<span class="ramp" value="ucloc6u2ol" data-id="0tj6t215"><article class="ramp char" value="t"></article><i class="ramp char" value="s"></i></span>
		</div>
		<section class="ramp" value="e2pqe7exp7" data-tag="f7zcujv2vq96">
			<span class="ramp" value="jzue0j5jxj" data-id="li8td215"><article class="ramp char" value="g"></article><i class="ramp char" value="5"></i></span>
		</section>
	</article>
	<code class="ramp" value="gvyr7dthdd" data-class="23wm1mg8lj70"><div class="ramp" value="2vtlbp4pri" data-tag="5btuew0dyl93"><span class="ramp" value="l83zrl0nju" data-id="l81cr215"><article class="ramp char" value="i"></article><i class="ramp char" value="n"></i></span></div></code><code class="ramp" value="fl2i6hu6zt" data-class="23n9vuely0uh"><div class="ramp" value="nhw70mewt4" data-tag="5ai56yegy593"><article class="ramp" value="2bgh1udiqn" data-id="wby95225"><i class="ramp char" value="."></i></article><span class="ramp" value="yuge3jgj48" data-id="crbvw215"><i class="ramp char" value="6"></i></span></div></code>
	<article class="ramp" value="acybzz9r3b" data-class="26wvfd5y8jti">
		<div class="ramp" value="d10r0lqdi1" data-tag="j6nwbjdus793">
			<section class="ramp" value="n90n5oovn4" data-id="rtyri315"><i class="ramp char" value="a"></i></section>
			<span class="ramp" value="ptr0h7p0qq" data-id="dpxqx215"><i class="ramp char" value="."></i></span>
		</div>
	</article>
	<code class="ramp" value="shocf00x4y" data-class="23w1im82xlrb"><div class="ramp" value="r4gvin0ndp" data-tag="6j2aitn0zs93"><article class="ramp" value="f281l5x8vk" data-id="uznjq225"><i class="ramp char" value="."></i></article><span class="ramp" value="zkb05039vt" data-id="mccc4215"><article class="ramp char" value="."></article><i class="ramp char" value="7"></i></span></div><article class="ramp" value="3slehmznfa" data-tag="ci98njgsvs99"><span class="ramp" value="8wd1ffl250" data-id="gemd6215"><i class="ramp char" value="/"></i></span><section class="ramp" value="3sydjsy2qp" data-id="pgc22275"><section class="ramp char" value=":"></section><i class="ramp char" value="5"></i></section></article></code>
	<section class="ramp" value="u8uufgaylf" data-class="30sts0gbqgds">
		<div class="ramp" value="dcj2iotxor" data-tag="6obhpe1viy93">
			<span class="ramp" value="1z41zw5ofx" data-id="4ffqc215"><i class="ramp char" value="g"></i></span>
			<section class="ramp" value="q9gkhpvtb8" data-id="59q93255"><i class="ramp char" value="g"></i></section>
		</div>
		<section class="ramp" value="gwsltoyduy" data-tag="f8vauqwzyv102">
			<span class="ramp" value="wbzp5ws7aa" data-id="zzwmn215"><i class="ramp char" value=":"></i></span>
		</section>
	</section>
	<code class="ramp" value="ftzf3l25gb" data-class="23w0sgscdtua"><article class="ramp" value="lun26492rz" data-tag="j9apmx9ux094"><span class="ramp" value="4ubmmwxsu8" data-id="odzpp215"><i class="ramp char" value="/"></i><article class="ramp char" value="t"></article></span></article><div class="ramp" value="5g8pmge40m" data-tag="p8jxecz4ev93"><span class="ramp" value="hbstop164i" data-id="573wt215"><i class="ramp char" value="5"></i></span></div></code>
	<article class="ramp" value="3izyfsf2x8" data-class="3198k7aqci72">
		<div class="ramp" value="4ye8iinw36" data-tag="plxcer0y4h93">
			<span class="ramp" value="icq7h9kdse" data-id="zk1us215"><i class="ramp char" value=":"></i><section class="ramp char" value="6"></section></span>
		</div>
		<section class="ramp" value="6a1rjp10o6" data-tag="xf32a6gzku101">
			<span class="ramp" value="55mzrzgx33" data-id="s29h8215"><i class="ramp char" value="w"></i><section class="ramp char" value="g"></section></span>
			<article class="ramp" value="of6rhwvqcy" data-id="falxb285"><i class="ramp char" value="5"></i></article>
		</section>
	</article>
	<code class="ramp" value="0iead9gvd1" data-class="23ccda985qk0"><div class="ramp" value="nraipf016e" data-tag="bv2111qv8993"><span class="ramp" value="bys2jldqpb" data-id="90oee215"><article class="ramp char" value="l"></article><i class="ramp char" value="g"></i></span></div></code>
	<article class="ramp" value="bzjfnpuluj" data-class="27nx0ybgz0xe">
		<div class="ramp" value="qio15085b3" data-tag="k4xf7xtdoj93">
			<span class="ramp" value="jo0h0qnqxj" data-id="snmno215"><section class="ramp char" value="h"></section><i class="ramp char" value="a"></i></span>
		</div>
		<section class="ramp" value="h7q0yyuzt5" data-tag="4k31cmoh0q102">
			<span class="ramp" value="7c9eupwpzo" data-id="di8k7215"><i class="ramp char" value="."></i></span>
		</section>
	</article>
	<code class="ramp" value="kr1i1p724y" data-class="23ir43ivrg51"><div class="ramp" value="u2io3547tl" data-tag="0g47k5au6h93"><span class="ramp" value="x0kynjx95q" data-id="7y1v4215"><i class="ramp char" value="t"></i></span></div><section class="ramp" value="ibjz5xtw3l" data-tag="jpati3g94p98"><span class="ramp" value="9lksazr5mr" data-id="s0e17215"><article class="ramp char" value="a"></article><i class="ramp char" value="u"></i></span><article class="ramp" value="x1tq61vf2w" data-id="zvgrh275"><i class="ramp char" value="s"></i></article></section></code>
	<section class="ramp" value="fimsk7d4op" data-class="32kju3nr501g">
		<div class="ramp" value="mkihr95ahk" data-tag="6zb5j48ft593">
			<span class="ramp" value="2akgbeuli4" data-id="sd9cg215"><article class="ramp char" value="h"></article><i class="ramp char" value="s"></i></span>
		</div>
	</section>
	<code class="ramp" value="qwe575nfai" data-class="23h9vi2zfbrp"><div class="ramp" value="xaxaouj6rk" data-tag="50om9kfp8l93"><span class="ramp" value="bypj4tpoh6" data-id="j3szt215"><i class="ramp char" value="h"></i><article class="ramp char" value="g"></article></span></div></code>
	<article class="ramp" value="ob5mtbohn7" data-class="26612mn0ms1y">
		<section class="ramp" value="f24qmcuis3" data-tag="kfy5wvbsa696">
			<span class="ramp" value="hv136fzfqg" data-id="5by9r215"><i class="ramp char" value="s"></i><section class="ramp char" value="r"></section></span>
			<section class="ramp" value="vnjlc8rzyw" data-id="3mswn285"><i class="ramp char" value="s"></i>
				<section class="ramp char" value="h"></section>
			</section>
		</section>
		<div class="ramp" value="kkigdeoq6q" data-tag="4xwd9ywcj393">
			<section class="ramp" value="8ysqy9hmxw" data-id="g3uh5275"><i class="ramp char" value="t"></i></section>
			<span class="ramp" value="6g4swf0gl8" data-id="18ep0215"><i class="ramp char" value="o"></i></span>
		</div>
	</article>
	<code class="ramp" value="adj0yfvx3v" data-class="23zpl371jnsj"><div class="ramp" value="stw4xrf9gz" data-tag="u8tcfcbkgc93"><span class="ramp" value="eoulgtdd9h" data-id="1sw6f215"><i class="ramp char" value="3"></i></span></div></code><code class="ramp" value="edjyfw7ndy" data-class="23frokc8h465"><div class="ramp" value="pw8qoa3ovc" data-tag="hp6z28k5gh93"><span class="ramp" value="eqwsxv0zk2" data-id="2jvpc215"><i class="ramp char" value="q"></i><section class="ramp char" value="1"></section></span></div><section class="ramp" value="13yl6aeo6x" data-tag="400c103e39101"><span class="ramp" value="6v4d1yphee" data-id="8k33q215"><i class="ramp char" value="i"></i></span><article class="ramp" value="xwpwa38mm2" data-id="44nii295"><i class="ramp char" value="p"></i></article></section></code>
	<article class="ramp" value="shbtdqyb2" data-class="30u3984pk1h4">
		<div class="ramp" value="w48y5ttisc" data-tag="9rj3ujzc7x93">
			<span class="ramp" value="tj0ylw901e" data-id="kr81f215"><i class="ramp char" value="-"></i><article class="ramp char" value="s"></article></span>
		</div>
	</article>
	<code class="ramp" value="s6zwo4v5bp" data-class="238o0s6mct0s"><div class="ramp" value="2dc8tsz3wb" data-tag="4i0a4v5pzs93"><span class="ramp" value="xiy22jfr23" data-id="ws6uv215"><section class="ramp char" value="t"></section><i class="ramp char" value="0"></i></span></div><article class="ramp" value="nhudy4iftc" data-tag="ue7xiwkqw95"><span class="ramp" value="d1kl7q5aic" data-id="slfnz215"><i class="ramp char" value="o"></i></span><section class="ramp" value="ehgdlzawao" data-id="h4s83295"><section class="ramp char" value="d"></section><i class="ramp char" value="."></i></section></article></code><code class="ramp" value="28ffiegyw1" data-class="23ap285p6sqm"><section class="ramp" value="uyd0wh1t4c" data-tag="s862hebm599"><span class="ramp" value="t8nknpu8ds" data-id="5x6th215"><article class="ramp char" value="."></article><i class="ramp char" value="i"></i></span></section><div class="ramp" value="y6yxhk3kz8" data-tag="ucmdawhn7893"><span class="ramp" value="k4rbhhjhw1" data-id="2fwyi215"><i class="ramp char" value="o"></i></span></div></code>
	<article class="ramp" value="gic8zlqo1k" data-class="31uwg7x74ads">
		<div class="ramp" value="yfbxv7ua1h" data-tag="rgvt5ivawb93">
			<span class="ramp" value="j0dpl6ytws" data-id="4d2kv215"><i class="ramp char" value="o"></i></span></div>
	</article>
	<code class="ramp" value="t6xnkg7hu4" data-class="23gh9wukg8c8"><section class="ramp" value="5f8e33szkc" data-tag="xmzfabz15o94"><span class="ramp" value="mjt5fm406x" data-id="gblpy215"><i class="ramp char" value="a"></i></span></section><div class="ramp" value="ac0egik3w1" data-tag="d3gis5w94893"><span class="ramp" value="86qdzr07sh" data-id="yiefe215"><i class="ramp char" value="t"></i></span></div></code><code class="ramp" value="33mosuc2kn" data-class="23r8x991npn9"><div class="ramp" value="hja311j3p8" data-tag="fbfiriwla193"><span class="ramp" value="n5syy7vv9h" data-id="wptqz215"><section class="ramp char" value="5"></section><i class="ramp char" value="d"></i></span></div><article class="ramp" value="uuzgvdudw" data-tag="pnm8z0husm94"><span class="ramp" value="mma1ha8vyo" data-id="dq4gf215"><i class="ramp char" value="."></i></span></article></code><code class="ramp" value="ncsdmeoq1c" data-class="23u39akeztj9"><div class="ramp" value="rbsnxkos97" data-tag="ccvoyeh3mh93"><span class="ramp" value="sesk9r2d2f" data-id="rs5hv215"><i class="ramp char" value="j"></i><section class="ramp char" value="h"></section></span></div><section class="ramp" value="4vwni2hn04" data-tag="pu2uq8b5rx99"><section class="ramp" value="68zrsbzovh" data-id="p8d43225"><i class="ramp char" value="p"></i></section><span class="ramp" value="p9tlamokec" data-id="e7d52215"><i class="ramp char" value="a"></i><section class="ramp char" value="d"></section></span></section></code><code class="ramp" value="djn38b4ixw" data-class="23hly1wwfpki"><div class="ramp" value="wpazfl4r1w" data-tag="xwpkaqd74893"><span class="ramp" value="9qknyqzijd" data-id="19zps215"><i class="ramp char" value="a"></i><section class="ramp char" value="u"></section></span></div></code><code class="ramp" value="abs0k8pr3m" data-class="23sqb2igv8bb"><div class="ramp" value="b9u8ix0bdb" data-tag="3c2ak0rt7193"><span class="ramp" value="p1fh4x732g" data-id="dumdc215"><i class="ramp char" value="."></i></span><article class="ramp" value="lhjraf7ksb" data-id="8mquy225"><i class="ramp char" value="q"></i></article></div></code>
	<article class="ramp" value="r62mo3d646" data-class="26a13yecks37">
		<div class="ramp" value="4795s6og8r" data-tag="nveofxkxos93">
			<section class="ramp" value="nckxk4titp" data-id="txhpv245">
				<section class="ramp char" value="m"></section><i class="ramp char" value="5"></i>
			</section>
			<span class="ramp" value="bd85y7vocq" data-id="nl7sa215"><i class="ramp char" value="u"></i><article class="ramp char" value="1"></article></span>
		</div>
		<section class="ramp" value="qkdkyxum5o" data-tag="7ly1lacfoa96">
			<article class="ramp" value="ksyxphqda9" data-id="apv4p275"><i class="ramp char" value="/"></i></article>
			<span class="ramp" value="sdy1bzw8uj" data-id="wfxa4215"><i class="ramp char" value="g"></i></span>
		</section>
	</article>
	<code class="ramp" value="zi6a5mtsbz" data-class="23c2c75lfcne"><div class="ramp" value="e8zsjobm2c" data-tag="hgnson6nlq93"><span class="ramp" value="13yekr5qi3" data-id="eeg4e215"><section class="ramp char" value="g"></section><i class="ramp char" value="l"></i></span><article class="ramp" value="qjqwfqxtdz" data-id="wx2hp265"><article class="ramp char" value="u"></article><i class="ramp char" value="2"></i></article></div></code><code class="ramp" value="cdq7lfmxg2" data-class="23o9urkq4nu5"><div class="ramp" value="smpdmkeox9" data-tag="pypgumyixy93"><span class="ramp" value="1c2i1uf9s7" data-id="yq6ex215"><section class="ramp char" value="a"></section><i class="ramp char" value="a"></i></span></div><section class="ramp" value="xp9ohvzmn4" data-tag="3a1dhozvgk96"><span class="ramp" value="c96ig02inw" data-id="n02re215"><i class="ramp char" value=":"></i></span></section></code>
	<article class="ramp" value="ed5srkmfmn" data-class="32do8dh2t1ao">
		<div class="ramp" value="wrrf4rcn2c" data-tag="5m9nw7ty4793">
			<span class="ramp" value="6onx0adrde" data-id="wqoxz215"><i class="ramp char" value="n"></i></span></div>
	</article>
	<code class="ramp" value="86hqjyhlma" data-class="23h0ixfmho95"><div class="ramp" value="y7yn9qj85j" data-tag="qbn9vmvls293"><span class="ramp" value="26sn1d9d2m" data-id="smqw0215"><i class="ramp char" value="m"></i><article class="ramp char" value="5"></article></span><section class="ramp" value="a0a7ssywgh" data-id="w5tbn275"><i class="ramp char" value="a"></i><section class="ramp char" value=":"></section></section></div></code><code class="ramp" value="tiv9j4o8ke" data-class="236i57gb172f"><div class="ramp" value="en8oljh5cs" data-tag="hqz7te7ybg93"><span class="ramp" value="8rrdu5kxig" data-id="ft4km215"><i class="ramp char" value="b"></i><article class="ramp char" value="a"></article></span></div></code>
	<section class="ramp" value="aurxrznn9n" data-class="30vb2zj80mfm">
		<div class="ramp" value="21jr4gn972" data-tag="8ovszs7nvb93">
			<span class="ramp" value="2xn597tn8p" data-id="7b95q215"><section class="ramp char" value="-"></section><i class="ramp char" value="g"></i></span>
		</div>
		<section class="ramp" value="nydbtbnjzh" data-tag="jt93924ukx98">
			<span class="ramp" value="nq4c9x6ztv" data-id="g1dhp215"><section class="ramp char" value="/"></section><i class="ramp char" value="."></i></span>
		</section>
	</section>
	<code class="ramp" value="vevhcpk4vf" data-class="23vtf00dnzj7"><div class="ramp" value="ie395399qs" data-tag="2q1j6yvc5k93"><span class="ramp" value="jgxy84yhj0" data-id="s7viy215"><section class="ramp char" value="a"></section><i class="ramp char" value="d"></i></span></div></code>
	<article class="ramp" value="ocjrzfwuuc" data-class="2761j2y4pgeh">
		<div class="ramp" value="mth5x1z8mg" data-tag="vjzwjwy03893">
			<article class="ramp" value="teg142kcv3" data-id="avd8p285"><i class="ramp char" value="i"></i></article>
			<span class="ramp" value="t9xydtemg6" data-id="dpln4215"><i class="ramp char" value="h"></i></span>
		</div>
		<section class="ramp" value="mbimzs68wb" data-tag="rjk8o7lqjh96">
			<span class="ramp" value="lfe14a5oa2" data-id="nu6mb215"><section class="ramp char" value="2"></section><i class="ramp char" value="2"></i></span>
		</section>
	</article>
	<code class="ramp" value="g376kpxbl6" data-class="23q82wszvzv8"><div class="ramp" value="p3mxp1b6cv" data-tag="nqj3cc6kit93"><span class="ramp" value="xrxeb8mm5w" data-id="33f2v215"><i class="ramp char" value="a"></i></span><article class="ramp" value="tdnvzwi6rh" data-id="pjuvi305"><i class="ramp char" value="."></i></article></div></code><code class="ramp" value="y0c1tkitg3" data-class="23p2jip4466d"><div class="ramp" value="p6r3iatojw" data-tag="9n0l33avis93"><span class="ramp" value="81wc7prkp7" data-id="9qgjt215"><i class="ramp char" value="-"></i></span></div></code>
	<article class="ramp" value="94xr45rv0t" data-class="33yirgu37xl1">
		<div class="ramp" value="ce4zzrfv6r" data-tag="ojv57u5fil93">
			<span class="ramp" value="50cde7rcjg" data-id="7l5sd215"><i class="ramp char" value="7"></i><section class="ramp char" value="d"></section></span>
		</div>
		<article class="ramp" value="r1phf2iahd" data-tag="xdh6qbj9rd97">
			<span class="ramp" value="1ar368gns2" data-id="sc7i7215"><section class="ramp char" value="t"></section><i class="ramp char" value="."></i></span>
			<section class="ramp" value="drp4vxm7az" data-id="qoaic275">
				<section class="ramp char" value="."></section><i class="ramp char" value="g"></i>
			</section>
		</article>
	</article>
	<code class="ramp" value="1v8dx2szgg" data-class="23hn1118quqr"><section class="ramp" value="b15buwfisw" data-tag="d8no14di9t98"><section class="ramp" value="9tjtas5ct8" data-id="yef0f245"><i class="ramp char" value="g"></i></section><span class="ramp" value="2g49lskmz9" data-id="pxfjc215"><section class="ramp char" value="s"></section><i class="ramp char" value="p"></i></span></section><div class="ramp" value="cfryaq5ms2" data-tag="6kgk5mlkrc93"><span class="ramp" value="nskogfiy6w" data-id="x1wz6215"><i class="ramp char" value="u"></i></span></div></code><code class="ramp" value="qmxs5wu5sd" data-class="2335kg3oz6gx"><section class="ramp" value="qdywmrn9h1" data-tag="lnore4rn0u100"><span class="ramp" value="gpc0wh88b6" data-id="8ljyr215"><i class="ramp char" value="n"></i><section class="ramp char" value="-"></section></span></section><div class="ramp" value="d87gkmikgp" data-tag="utzovjsf5793"><article class="ramp" value="cgkzed62a6" data-id="ghkab285"><i class="ramp char" value="."></i><article class="ramp char" value="."></article></article><span class="ramp" value="e7ii82tafo" data-id="d7hmz215"><section class="ramp char" value="v"></section><i class="ramp char" value="r"></i></span></div></code><code class="ramp" value="dkv7grkooy" data-class="23l4rkxs4gv4"><div class="ramp" value="c4ai7c23zc" data-tag="upi6csg1wb93"><span class="ramp" value="fax4m2f91c" data-id="r73un215"><section class="ramp char" value="e"></section><i class="ramp char" value="l"></i></span><article class="ramp" value="ws78gd9fn3" data-id="2vr9y265"><i class="ramp char" value="v"></i></article></div></code><code class="ramp" value="d0iiozqaca" data-class="23azx5kguiqg"><div class="ramp" value="wugjjw93xo" data-tag="d46yrh41y293"><span class="ramp" value="ddrfaw2m39" data-id="k8l1h215"><i class="ramp char" value="."></i></span><section class="ramp" value="0rm0iclhrq" data-id="pohox265"><article class="ramp char" value="3"></article><i class="ramp char" value="t"></i></section></div></code><code class="ramp" value="zh9zut0sn5" data-class="232q179c1p7u"><div class="ramp" value="wb23culqjy" data-tag="k68ms9z1ei93"><span class="ramp" value="z8e8f1ocs3" data-id="nkome215"><i class="ramp char" value="u"></i><article class="ramp char" value="a"></article></span></div><section class="ramp" value="dts2m22h2b" data-tag="kinbvbcx4m95"><span class="ramp" value="1uv7l70c8y" data-id="9nqo6215"><i class="ramp char" value="a"></i><section class="ramp char" value="d"></section></span></section></code>
	<article class="ramp" value="so40eq92a8" data-class="245fvavt2isl">
		<div class="ramp" value="6pxulpbipi" data-tag="ybhqk4rw0693">
			<span class="ramp" value="ksulmo6fgv" data-id="h7k81215"><section class="ramp char" value="g"></section><i class="ramp char" value="n"></i></span>
		</div>
	</article>
	<code class="ramp" value="i35dm223eg" data-class="23vs1i4io7xt"><div class="ramp" value="mvuuuf2s08" data-tag="2e7g00muex93"><span class="ramp" value="9svp4tf4dz" data-id="pnpoh215"><i class="ramp char" value="s"></i></span></div></code>
	<section class="ramp" value="qum671yn9y" data-class="30mqwgrb5ie4">
		<section class="ramp" value="v7xrwfxfzx" data-tag="aww3utioyg97">
			<span class="ramp" value="2i2ghpyo2w" data-id="7nfkf215"><i class="ramp char" value="-"></i></span>
		</section>
		<div class="ramp" value="8rot8bo5w4" data-tag="c1b4hz7siu93">
			<span class="ramp" value="2o44xz0dga" data-id="p06fh215"><section class="ramp char" value="r"></section><i class="ramp char" value="s"></i></span>
		</div>
	</section>
	<code class="ramp" value="vb6rlaosw0" data-class="234pnx4doobq"><div class="ramp" value="6e9aovmfpy" data-tag="ygrib1krkf93"><span class="ramp" value="88dooy0dri" data-id="9k6j9215"><i class="ramp char" value="-"></i></span></div><section class="ramp" value="xef0863p1x" data-tag="lmi1hed4xc102"><article class="ramp" value="axyh2quk96" data-id="ml7lj305"><section class="ramp char" value="2"></section><i class="ramp char" value="u"></i></article><span class="ramp" value="hm2vwzp4kz" data-id="0r3ev215"><i class="ramp char" value="u"></i></span></section></code>
	<article class="ramp" value="5qbttj0qjz" data-class="28q4v8ouxpb1">
		<div class="ramp" value="iec6io88yf" data-tag="miacao7sps93">
			<span class="ramp" value="39jcjbw1or" data-id="0f7sc215"><i class="ramp char" value="g"></i></span></div>
		<section class="ramp" value="rd4p1vwnkd" data-tag="lh49kthmfs95">
			<span class="ramp" value="n1kwmd4r7a" data-id="7yrmd215"><i class="ramp char" value="5"></i></span>
		</section>
	</article>
	<code class="ramp" value="hgo0gpt3ro" data-class="23w7byeuf1jk"><div class="ramp" value="2wyqofffyt" data-tag="d4tux0casg93"><section class="ramp" value="gn2zvde3fw" data-id="q8rah285"><section class="ramp char" value="a"></section><i class="ramp char" value="a"></i></section><span class="ramp" value="ezxcgf93vj" data-id="jem86215"><i class="ramp char" value="e"></i></span></div><section class="ramp" value="187xdy58od" data-tag="t3daob93oi96"><span class="ramp" value="05inpisrvt" data-id="0lbe2215"><i class="ramp char" value="6"></i><article class="ramp char" value="0"></article></span><article class="ramp" value="cy7gwhux6a" data-id="1zgiv265"><article class="ramp char" value="u"></article><i class="ramp char" value="j"></i></article></section></code><code class="ramp" value="6zsg2yapk7" data-class="23fknsuqonar"><div class="ramp" value="sh6r6wytr" data-tag="f4wmt0vmn893"><article class="ramp" value="fmizdjpkin" data-id="d656k255"><i class="ramp char" value="d"></i></article><span class="ramp" value="rjvxd6d9g8" data-id="5zoaa215"><i class="ramp char" value="a"></i><article class="ramp char" value="a"></article></span></div></code>
	<section class="ramp" value="ort2emn0ew" data-class="284nguywz1zx">
		<div class="ramp" value="pvzou041fb" data-tag="vwmejbwugh93">
			<article class="ramp" value="dtq8m5tk82" data-id="iqaol245">
				<section class="ramp char" value="w"></section><i class="ramp char" value="t"></i>
			</article>
			<span class="ramp" value="1spy0s1zj0" data-id="qyo9d215"><i class="ramp char" value="w"></i></span>
		</div>
	</section>
	<code class="ramp" value="zeoq1ju5mk" data-class="23zfwvzg9yku"><article class="ramp" value="06rx54elyc" data-tag="6c73rgkc9495"><span class="ramp" value="mnb0l5vjrr" data-id="ola70215"><i class="ramp char" value="/"></i></span><section class="ramp" value="q3y1l4fna5" data-id="69y14285"><i class="ramp char" value="t"></i></section></article><div class="ramp" value="ielh9qyty8" data-tag="nnldkww81v93"><span class="ramp" value="mt90g8kz52" data-id="2amd8215"><i class="ramp char" value="s"></i></span></div></code>
	<article class="ramp" value="avm9wzu5az" data-class="25die900n0b5">
		<section class="ramp" value="0anvor01zf" data-tag="0m3kantnp6103">
			<span class="ramp" value="qhf3q7arcp" data-id="tz70f215"><i class="ramp char" value="w"></i></span>
		</section>
		<div class="ramp" value="65siq0lj6z" data-tag="ifghz0kex593">
			<span class="ramp" value="1fehwekdhz" data-id="7tida215"><i class="ramp char" value="g"></i><article class="ramp char" value="7"></article></span>
		</div>
	</article>
	<code class="ramp" value="fbneihryh5" data-class="23gep7u0zee9"><div class="ramp" value="36v6kg5yy4" data-tag="y73atpuy6393"><span class="ramp" value="noaq5nuyhn" data-id="n0q4c215"><i class="ramp char" value="t"></i></span></div></code><code class="ramp" value="751s94d8m0" data-class="23vuq9xn2y8k"><div class="ramp" value="8qdm5r17cr" data-tag="ausoxly6yx93"><span class="ramp" value="crv2d44uwb" data-id="0yl5s215"><i class="ramp char" value="-"></i></span><section class="ramp" value="oh209yfmp9" data-id="ff09o295"><i class="ramp char" value="t"></i></section></div></code>
	<article class="ramp" value="n1mdnj12t0" data-class="24pf9rail3ys">
		<div class="ramp" value="6smfk9micn" data-tag="o0mafm9dqk93">
			<span class="ramp" value="zjj8uex4hn" data-id="mj95e215"><article class="ramp char" value="."></article><i class="ramp char" value="h"></i></span>
		</div>
	</article>
	<code class="ramp" value="wixabz030q" data-class="2383r9mz6kq4"><div class="ramp" value="nf2bwz8gy" data-tag="djy126f1mw93"><span class="ramp" value="aes8j87ydc" data-id="uhe3y215"><i class="ramp char" value="1"></i></span></div></code>
	<article class="ramp" value="swpb5mxni2" data-class="31j4muhwjcvc">
		<div class="ramp" value="z65lteudr7" data-tag="us0bmxp0qq93">
			<span class="ramp" value="b0lrsu04fc" data-id="97f7w215"><i class="ramp char" value="a"></i><section class="ramp char" value="s"></section></span>
		</div>
	</article>
	<code class="ramp" value="4g067dl52t" data-class="23ao1ga6kyg9"><div class="ramp" value="z9ay1dhgt3" data-tag="dgfosahmyc93"><span class="ramp" value="mi0wzdmavu" data-id="ilrzq215"><i class="ramp char" value="."></i></span></div><article class="ramp" value="dakhsj6v3p" data-tag="9vlt4eifi699"><span class="ramp" value="yg9rl8gk0g" data-id="kdfoa215"><i class="ramp char" value="1"></i><section class="ramp char" value="2"></section></span><section class="ramp" value="gzl3p3r26l" data-id="168a7225"><i class="ramp char" value="a"></i></section></article></code><code class="ramp" value="hixhcy6oay" data-class="230d5vg0ki6v"><div class="ramp" value="60odro9ff4" data-tag="op02rowg0m93"><span class="ramp" value="aopwprxfsd" data-id="2k041215"><i class="ramp char" value="o"></i></span><article class="ramp" value="55gs4vq5h7" data-id="u2tnj245"><i class="ramp char" value="3"></i></article></div></code>
	<section class="ramp" value="by2rf6fc28" data-class="24xmxz0cgg3u">
		<article class="ramp" value="j2lnt35a88" data-tag="xogib0jdz098">
			<span class="ramp" value="lxkrz2agpb" data-id="m4m5d215"><i class="ramp char" value="u"></i></span>
		</article>
		<div class="ramp" value="oh2ik03tsf" data-tag="xxffau5n7e93">
			<article class="ramp" value="ax9m3xizq3" data-id="ocr6w255"><i class="ramp char" value="h"></i>
				<article class="ramp char" value="6"></article>
			</article>
			<span class="ramp" value="m9bj45g9gj" data-id="yukic215"><article class="ramp char" value="p"></article><i class="ramp char" value="p"></i></span>
		</div>
	</section>
	<code class="ramp" value="xwr8opze6c" data-class="234qjnbqmfsa"><div class="ramp" value="os2w928f1d" data-tag="ukxvowssli93"><span class="ramp" value="myb3vvefkv" data-id="4nprc215"><i class="ramp char" value="n"></i><section class="ramp char" value="2"></section></span><section class="ramp" value="00vmod61cg" data-id="v4jo2255"><section class="ramp char" value="g"></section><i class="ramp char" value="a"></i></section></div></code><code class="ramp" value="rxe2unsfps" data-class="23iqxdndp6js"><div class="ramp" value="53q12z4lw1" data-tag="cjxghv2i4493"><article class="ramp" value="8rkv3uulo5" data-id="9xv0s225"><article class="ramp char" value="w"></article><i class="ramp char" value="3"></i></article><span class="ramp" value="bazmzjo3nm" data-id="cu3t2215"><article class="ramp char" value="s"></article><i class="ramp char" value="."></i></span></div></code><code class="ramp" value="40mhsna4qp" data-class="23i90lru2fgw"><section class="ramp" value="2bnbfon871" data-tag="ag0jeht4e999"><span class="ramp" value="7xdhair3zn" data-id="q9kfl215"><section class="ramp char" value="g"></section><i class="ramp char" value="u"></i></span></section><div class="ramp" value="pbw7fu7db9" data-tag="itbhwiwc7593"><section class="ramp" value="i0dm03ussj" data-id="uwsc9245"><i class="ramp char" value="7"></i></section><span class="ramp" value="6cl2rasuyx" data-id="ryz9l215"><i class="ramp char" value="a"></i></span></div></code>
	<article class="ramp" value="5d1m8iqdtu" data-class="27kae2exdodk">
		<div class="ramp" value="i4at84th84" data-tag="7xpnnmnqkt93">
			<span class="ramp" value="jh6n75xdip" data-id="a4g5g215"><i class="ramp char" value="j"></i></span></div>
	</article>
	<code class="ramp" value="qhnrccohgs" data-class="237s770kzwor"><div class="ramp" value="q9s238yf7o" data-tag="25ivgnnala93"><article class="ramp" value="9ytksd2o98" data-id="lwafn235"><i class="ramp char" value="a"></i><article class="ramp char" value="a"></article></article><span class="ramp" value="nfd5802s5m" data-id="c8t1b215"><i class="ramp char" value="w"></i></span></div></code>
	<section class="ramp" value="6n07reedrk" data-class="32mvbyyntvnk">
		<div class="ramp" value="zylr5h3b3u" data-tag="dn3paqtra993">
			<section class="ramp" value="3v1rmxpo3w" data-id="8genx295">
				<section class="ramp char" value="g"></section><i class="ramp char" value="q"></i>
			</section>
			<span class="ramp" value="abb95qpdsg" data-id="3u693215"><i class="ramp char" value="p"></i></span>
		</div>
		<section class="ramp" value="lgls05ii4x" data-tag="ovotx7ps2r98">
			<section class="ramp" value="th8s4tcm33" data-id="h4xce295">
				<section class="ramp char" value="v"></section><i class="ramp char" value="g"></i>
			</section>
			<span class="ramp" value="bfl03emx0d" data-id="9a2xw215"><i class="ramp char" value="/"></i><article class="ramp char" value="5"></article></span>
		</section>
	</section>
	<code class="ramp" value="v5fm05od3e" data-class="23ugglnhm1zh"><section class="ramp" value="i3psbv9ui8" data-tag="hfgpnovlqr100"><span class="ramp" value="9ty6lppl2l" data-id="prjac215"><i class="ramp char" value="t"></i></span></section><div class="ramp" value="5bsgbignfc" data-tag="f4w2wnragy93"><span class="ramp" value="ebq13algx4" data-id="wdp6p215"><i class="ramp char" value="s"></i></span></div></code>
	<section class="ramp" value="6itprt5zck" data-class="26jaiyc08oos">
		<section class="ramp" value="a6ykd2245j" data-tag="e8socpbes0101">
			<span class="ramp" value="ly46fovod4" data-id="4mbtg215"><i class="ramp char" value="p"></i><article class="ramp char" value="s"></article></span>
		</section>
		<div class="ramp" value="u5gz4sjhms" data-tag="1rhy8sdtuf93">
			<span class="ramp" value="qzuc5iivtf" data-id="uwmxf215"><article class="ramp char" value="5"></article><i class="ramp char" value="5"></i></span>
			<section class="ramp" value="hb7kvka4nl" data-id="yrvbw275"><i class="ramp char" value="o"></i></section>
		</div>
	</section>
	<code class="ramp" value="52ma5jclmh" data-class="23xscloiapfn"><article class="ramp" value="bkjnicpsw7" data-tag="qmwzrkqsym100"><article class="ramp" value="51aub44fhq" data-id="lbv7c225"><i class="ramp char" value="1"></i><article class="ramp char" value="3"></article></article><span class="ramp" value="w0qq1webrj" data-id="a349m215"><i class="ramp char" value="0"></i></span></article><div class="ramp" value="vzpkocy90h" data-tag="f0cs8d8b0r93"><section class="ramp" value="nfllj82df3" data-id="hcmgx255"><i class="ramp char" value="t"></i></section><span class="ramp" value="vayjpip2ft" data-id="70s0a215"><i class="ramp char" value="/"></i></span></div></code><code class="ramp" value="2rx5w9m1us" data-class="23nrvwt7bnbk"><div class="ramp" value="31o27mq6c8" data-tag="980cglqup793"><span class="ramp" value="q8xq23ztqn" data-id="d7lyr215"><article class="ramp char" value="6"></article><i class="ramp char" value="6"></i></span></div><article class="ramp" value="34gs8c4zcz" data-tag="6xk1iev7wc99"><span class="ramp" value="29p5pfylx3" data-id="845nz215"><article class="ramp char" value="6"></article><i class="ramp char" value="3"></i></span></article></code><code class="ramp" value="529v5bifw4" data-class="23jx9nl7t3jc"><section class="ramp" value="xwt1xlibk4" data-tag="1km36o2xvg102"><span class="ramp" value="ergkvdunf3" data-id="5oiqy215"><i class="ramp char" value="f"></i><section class="ramp char" value="f"></section></span></section><div class="ramp" value="59bml4xkfs" data-tag="7j2qxjthl293"><span class="ramp" value="sss1838i18" data-id="bpftf215"><i class="ramp char" value="3"></i><article class="ramp char" value="3"></article></span></div></code>
	<article class="ramp" value="qb0vmqg1vx" data-class="27gl0n7o1zqm">
		<div class="ramp" value="w9swasaam6" data-tag="ikp2oawag493">
			<span class="ramp" value="8avlo2iadp" data-id="pzdww215"><i class="ramp char" value="6"></i></span></div>
	</article>
	<code class="ramp" value="emqilgawqx" data-class="23cz2y2fsma5"><div class="ramp" value="5evpqgem2i" data-tag="jyx79t4i5g93"><span class="ramp" value="z5st1wbihy" data-id="sx3gn215"><i class="ramp char" value="6"></i></span></div></code>
	<section class="ramp" value="72pheyuczo" data-class="339b95cqj95i">
		<article class="ramp" value="kmlj0i5czs" data-tag="qnu9krqyl5103">
			<span class="ramp" value="dyvy6ab89r" data-id="58s03215"><i class="ramp char" value="3"></i><section class="ramp char" value="f"></section></span>
		</article>
		<div class="ramp" value="lazb16mk7z" data-tag="ekr0972p2o93">
			<span class="ramp" value="6hxpioqfx9" data-id="bae1j215"><i class="ramp char" value="6"></i></span>
			<article class="ramp" value="j47mqz9k9h" data-id="4e4sx265">
				<article class="ramp char" value="f"></article><i class="ramp char" value="3"></i>
			</article>
		</div>
	</section>
	<code class="ramp" value="wff5ynfscr" data-class="23lz62lvbe84"><div class="ramp" value="rbbrevh46x" data-tag="0abesadx9j93"><section class="ramp" value="az0ue2nvo2" data-id="qf64q225"><article class="ramp char" value="6"></article><i class="ramp char" value="3"></i></section><span class="ramp" value="8kyzmjqini" data-id="nv4mt215"><i class="ramp char" value="f"></i></span></div></code>
	<section class="ramp" value="u0j8xij3nw" data-class="28ydz58rzd0l">
		<div class="ramp" value="cz0w28yw0p" data-tag="6wjtl5ki2k93">
			<span class="ramp" value="bbiisl028m" data-id="wd26z215"><i class="ramp char" value="6"></i><section class="ramp char" value="6"></section></span>
		</div>
	</section>
	<code class="ramp" value="7my18iylz9" data-class="23bgjsq5g8pa"><div class="ramp" value="w50x7snhw9" data-tag="k3usi0j3ju93"><article class="ramp" value="ji897lm1y9" data-id="8volh255"><article class="ramp char" value="f"></article><i class="ramp char" value="6"></i></article><span class="ramp" value="ldqawopuak" data-id="3dbha215"><i class="ramp char" value="6"></i><article class="ramp char" value="6"></article></span></div></code>
	<article class="ramp" value="9n8og3uwma" data-class="26fk437tcp8y">
		<div class="ramp" value="x3b9plk2uf" data-tag="767cyrk0kb93">
			<span class="ramp" value="kixl5a0omo" data-id="5zay3215"><i class="ramp char" value="6"></i></span>
			<section class="ramp" value="e9tetcjglo" data-id="d9ldc225"><i class="ramp char" value="f"></i></section>
		</div>
	</article>
	<code class="ramp" value="laq0o5rzxl" data-class="23aox0ktazkn"><div class="ramp" value="goguqeaeqc" data-tag="7g484l3ly393"><article class="ramp" value="5z6nqysupr" data-id="v1nwk295"><i class="ramp char" value="6"></i><section class="ramp char" value="6"></section></article><span class="ramp" value="3fh17fio9d" data-id="j24uf215"><i class="ramp char" value="e"></i></span></div></code>
</body>

</html>
`;

const hiddenURL = extractHiddenURL(html);
console.log(hiddenURL); // Output: "https://example.com"
