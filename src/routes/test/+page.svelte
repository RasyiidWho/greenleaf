<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<div class="spacer section-1 flex">
    <div class="z-50 w-screen h-screen flex items-center justify-center text-center">
        <div class="mask showreel flex items-center justify-center text-center">
            <p class="font-jost text-center text-7xl pb-2 tracking-tight font-bold absolute text-white z-10">sampah</p>
            <!-- <div class="sampah absolute z-10"> -->
                <!-- <p class="intro-title text-7xl font-bold tracking-tight text-orange-400 z-10">sampah</p> -->
            <!-- </div> -->
            <video class="w-screen object-cover" id="showreel" loop autoplay muted>
                <source src="intro.mp4" type="video/mp4" />
            </video>
        </div>
        <div class="sampah absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 pt-64 text-center">
            <p class="intro-desc text-7xl font-bold tracking-tight text-black">
                akan menjadi <span style="color: #71A324;" class="underline">asset</span> jika diolah dengan benar.
            </p>
        </div>
    </div>
</div>