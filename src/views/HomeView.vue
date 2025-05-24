<template>
  <div v-scroll-lock>
    <div class="bg-white px-5 shadow-lg">
    <div class="py-6 flex flex-col md:flex-row items-start md:items-center justify-between w-full">
      <div class="flex items-center justify-start w-full md:w-auto">
        <div class="Logo">
          <img src="../assets/images/pic1.png" alt="icon 4" class="mr-5 w-14 h-14 flex-shrink-0" />
        </div>
        <h4 class="text-2xl font-bold leading-tight text-gray-800">SMKN 1 KAWALI</h4>
      </div>
      <marquee class="font-bold leading-tight text-gray-800">
        <span v-for="(quote, index) in display.quote_of_the_day" :key="index">
          {{ quote }}
          <span v-if="index !== display.quote_of_the_day.length - 1">  ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎</span>
        </span>
      </marquee>
    </div>
  </div>


    <!-- Kartu -->
    <div id="cardsContainer" class="w-full flex flex-wrap justify-center gap-9 my-4">
      <div>
        <div
          class="bg-white shadow-md rounded-lg overflow-hidden h-32 w-48 mx-auto flex items-center justify-center border border-gray-500"
        >
          <div class="text-center">
            <h4 class="text-xl font-bold text-gray-800 mb-2">Total Siswa</h4>
            <p class="text-xm font-bold text-gray-700">{{ display.total_student || "0" }}</p>
          </div>
        </div>
      </div>

      <div>
        <div
          class="bg-white shadow-md rounded-lg overflow-hidden h-32 w-48 mx-auto flex items-center justify-center border border-gray-500"
        >
          <div class="text-center">
            <h4 class="text-xl font-bold text-gray-800 mb-2">Total Guru</h4>
            <p class="text-xm font-bold text-gray-700">{{ display.total_teacher || "0" }}</p>
          </div>
        </div>
      </div>

      <div>
        <div
          class="bg-white shadow-md rounded-lg overflow-hidden h-32 w-48 mx-auto flex items-center justify-center border border-gray-500"
        >
          <div class="text-center">
            <h4 class="text-xl font-bold text-gray-800 mb-2">Siswa Hadir</h4>
            <p class="text-xm font-bold text-gray-700">{{ display.total_student_attendance || "0" }}</p>
          </div>
        </div>
      </div>

      <div>
        <div
          class="bg-white shadow-md rounded-lg overflow-hidden h-32 w-48 mx-auto flex items-center justify-center border border-gray-500"
        >
          <div class="text-center">
            <h4 class="text-xl font-bold text-gray-800 mb-2">Siswa Tidak Hadir</h4>
            <p class="text-xm font-bold text-gray-700">{{ display.total_student_absent || "0" }}</p>
          </div>
        </div>
      </div>

      <div>
        <div
          class="bg-white shadow-md rounded-lg overflow-hidden h-32 w-48 mx-auto flex items-center justify-center border border-gray-500"
        >
          <div class="text-center">
            <h4 class="text-xl font-bold text-gray-800 mb-2">Guru Hadir</h4>
            <p class="text-xm font-bold text-gray-700">{{ display.total_teacher_attendance || "0" }}</p>
          </div>
        </div>
      </div>

      <div>
        <div
          class="bg-white shadow-md rounded-lg overflow-hidden h-32 w-48 mx-auto flex items-center justify-center border border-gray-500"
        >
          <div class="text-center">
            <h4 class="text-xl font-bold text-gray-800 mb-2">Guru Tidak Hadir</h4>
            <p class="text-xm font-bold text-gray-700">{{ display.total_teacher_absent || "0" }}</p>
          </div>
        </div>
      </div>

      <div>
        <div
          class="bg-white shadow-md rounded-lg overflow-hidden h-32 w-48 mx-auto flex items-center justify-center border border-gray-500"
        >
          <div class="text-center">
            <h4 class="text-xl font-bold text-gray-800 mb-2">Total Kelas</h4>
            <p class="text-xm font-bold text-gray-700">{{ display.total_class || "0" }}</p>
          </div>
        </div>
      </div>

      <div>
        <div
          class="bg-white shadow-md rounded-lg overflow-hidden h-32 w-48 mx-auto flex items-center justify-center border border-gray-500"
        >
          <div class="text-center">
            <h4 class="text-xl font-bold text-gray-800 mb-2">Kelas Kosong</h4>
            <p class="text-xm font-bold text-gray-700">{{ display.total_class_absent || "0" }}</p>
          </div>
        </div>
      </div>

      <div>
        <div
          class="bg-white shadow-md rounded-lg overflow-hidden h-32 w-48 mx-auto flex items-center justify-center border border-gray-500"
        >
          <div class="text-center">
            <h4 class="text-xl font-bold text-gray-800 mb-2">Persentase Siswa Masuk</h4>
            <p class="text-xm font-bold text-gray-700">{{ display.student_attendance_percentage || "0%" }}</p>
          </div>
        </div>
      </div>

      <div>
        <div
          class="bg-white shadow-md rounded-lg overflow-hidden h-32 w-48 mx-auto flex items-center justify-center border border-gray-500"
        >
          <div class="text-center">
            <h4 class="text-xl font-bold text-gray-800 mb-2">Persentase Guru Masuk</h4>
            <p class="text-xm font-bold text-gray-700">{{ display.teacher_attendance_percentage || "0%" }}</p>
          </div>
        </div>
      </div>

      <div>
        <div
          class="bg-white shadow-md rounded-lg overflow-hidden h-32 w-48 mx-auto flex items-center justify-center border border-gray-500"
        >
          <div class="text-center">
            <h4 class="text-xl font-bold text-gray-800 mb-2">Persentase Kelas Masuk</h4>
            <p class="text-xm font-bold text-gray-700">{{ display.class_attendance_percentage || "0%" }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- cards nama -->
    <div id="courseCardsContainer" class="w-full flex flex-wrap justify-center gap-4 mb-4">
      
      <div class="card">
        <div
          class="bg-white shadow-md rounded-lg overflow-hidden h-32 w-72 mx-auto flex items-center justify-center border border-gray-500"
        >
          <div class="text-center">
            <h5 class="text-xl font-bold text-gray-800 mb-2">Guru Favorit Bulan Ini</h5>
            <h1 class="text-xm text-gray-700 font-bold">{{ display.highest_rating_teacher || "-"}}</h1>
            <!-- <h4 class="text-xm text-gray-700 font-bold">{{ display.total_highest_rating }}</h4> -->
          </div>
        </div>
      </div>

      <div class="card">
        <div
          class="bg-white shadow-md rounded-lg overflow-hidden h-32 w-72 mx-auto flex items-center justify-center border border-gray-500"
        >
          <div class="text-center">
            <h5 class="text-xl font-bold text-gray-800 mb-2">Guru non-Favorit Bulan Ini</h5>
            <h1 class="text-xm text-gray-700 font-bold">{{ display.lowest_rating_teacher || "-"}}</h1>
            <!-- <h4 class="text-xm text-gray-700 font-bold">{{ display.total_lowest_rating }}</h4> -->
          </div>
        </div>
      </div>

      <div class="card">
        <div
          class="bg-white shadow-md rounded-lg overflow-hidden h-32 w-72 mx-auto flex items-center justify-center border border-gray-500"
        >
          <div class="text-center">
            <h5 class="text-xl font-bold text-gray-800 mb-2">Guru Teladan Bulan Ini</h5>
            <h1 class="text-xm text-gray-700 font-bold mr-5 ml-5">{{  display.teacher_of_the_month || "-"}}</h1>
          </div>
        </div>
      </div>

      <div class="card">
        <div
          class="bg-white shadow-md rounded-lg overflow-hidden h-32 w-72 mx-auto flex items-center justify-center border border-gray-500"
        >
          <div class="text-center">
            <h5 class="text-xl font-bold text-gray-800 mb-2 ml-2">Kelas Terbanyak Jam Kosong Minggu Ini</h5>
            <h1 class="text-xm text-gray-700 font-bold ml-2 mr-2">{{ display.class_with_most_free_periods || "-"}}</h1>
          </div>
        </div>
      </div>

      <div class="card">
        <div
          class="bg-white shadow-md rounded-lg overflow-hidden h-32 w-72 mx-auto flex items-center justify-center border border-gray-500"
        >
          <div class="text-center">
            <h5 class="text-xl font-bold text-gray-800 mb-2 mr-2 ml-2">Kelas dengan Jumlah Kehadiran Terendah</h5>
            <h1 class="text-xm text-gray-700 font-bold ml-2 mr-2">{{  display.class_with_highest_absent_percentage || "-"}}</h1>
          </div>
        </div>
      </div>

      <!-- Cuaca -->
      <div class="text-center mt-8">
        <div class="text-4xl text-black">
          <i class="fa-solid fa-cloud-sun mr-2"></i>
          <span>{{ "-°C" }}</span>
        </div>
        <div class="flex justify-between w-full mt-4 px-4"></div>
      </div>

    </div>

    <!-- Kelas -->
    <div id="courseCardsContainer" class="w-full flex flex-wrap justify-center gap-2 mb-4">
  <div class="course-card" v-for="(course, index) in display.course_name" :key="index">
    <div 
      :class="[
        'shadow-md rounded-lg overflow-hidden h-52 w-56 flex items-center justify-center border border-gray-500',
        display.course.status[index] === 'true' ? 'bg-white' : 'bg-yellow-300'
      ]"
    >
      <div class="text-center">
        <img 
          v-if="display.course.course_photo[index] === null" 
          src="../assets/images/school.jpg" 
          alt="Course Photo" 
          class="object-cover w-64 h-24"
        >
        <img 
          v-else 
          :src="'https://school.fath.my.id/' + display.course.course_photo[index]" 
          alt="Course Photo" 
          class="object-cover w-64 h-24"
        >
        <h5 class="text-sm text-gray-900 font-bold mt-2 mb-2">{{ 'Kelas ' + course }}</h5>
        <h1 class="text-xs font-bold mt-2 mb-2">{{ display.course.teacher_names[index] || '-' }}</h1>
        <h5 class="text-xs font-bold mt-2 mb-2">{{ display.course.lesson_name[index] || '-' }}</h5>
        <div v-if="display.course.data[index]" class="flex flex-wrap justify-center mt-2">
        <p class="text-xs font-bold mx-2">T: {{ display.course.data[index].total.total_student || '0' }}</p>
        <p class="text-xs font-bold mx-2">M: {{ display.course.data[index].total.present || '0' }}</p>
        <p class="text-xs font-bold mx-2">I: {{ display.course.data[index].total.permission || '0' }}</p>
        <p class="text-xs font-bold mx-2">S: {{ display.course.data[index].total.sick || '0' }}</p>
        <p class="text-xs font-bold mx-2">A: {{ display.course.data[index].total.absent || '0' }}</p>
      </div>

      </div>
    </div>
  </div>
</div>

    <!--Footer-->
    <div class="fixed bottom-0 left-0 right-0 bg-white px-5 sm:px-10 shadow-footer">
      <div class="mb-3 mt-5">
        <div class="mt-6 md:mt-0 md:flex-grow justify-right">
          <div class="flex items-center justify-end w-full md:w-auto">
            <img
              src="../assets/images/pic2.png"
              alt="icon 4"
              class="w-30 h-10 flex-shrink-0"
            />
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      display: {
        course_name: [],
        course: {
          status: [],
          course_photo: [],
          teacher_names: [],
          lesson_name: []
        }
      },
      pollingInterval: null,
    };
  },
  created() {
    this.fetchData();
    this.setupPolling();
    this.hideScrollbar();
  },
  beforeDestroy() {
    this.clearPolling();
    this.showScrollbar();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get(
          "https://fathschool.smkn1kawali.sch.id/api/get-display-dashboard",
          {
            headers: {
              "ngrok-skip-browser-warning": "true",
            },
          }
        );
        console.log("API Response:", response.data); // Debug: Cek data API
        this.display = response.data;
        console.log("Status Array:", this.display.course.status); // Debug: Cek status
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    hideScrollbar() {
      document.body.style.overflow = "hidden";
    },
    showScrollbar() {
      document.body.style.overflow = "";
    },
    setupPolling() {
      this.pollingInterval = setInterval(() => {
        this.fetchData();
      }, 5000);
    },
    clearPolling() {
      clearInterval(this.pollingInterval);
    },
  },
};
</script>



<style scoped>
body {
    overflow: hidden;
}

marquee {
  width: 40%; /* Sesuaikan lebar sesuai kebutuhan */
  white-space: nowrap; /* Agar teks tidak turun ke baris baru */
  overflow: hidden;
  font-size: large;
}

.Logo {
  float: left;
}

.bg-white {
  margin-bottom: 0.5rem; /* Reduce space between navbar and cards */
}

#cardsContainer {
  margin-top: 0.5rem; /* Reduce space between cards container and navbar */
  margin-bottom: 0.5rem; /* Reduce space between card containers */
}

.card {
  margin: 0.5rem; /* Reduce space between cards */
}

#courseCardsContainer {
  margin-bottom: 0.5rem; /* Reduce space between additional course cards and previous card section */
}

.course-card {
  margin: 0.5rem; /* Reduce space between course cards */
}

@media (max-width: 767px) {
  .flex.items-center.justify-start.w-full.md\:w-auto {
    justify-content: flex-start;
  }
}

@media (min-width: 768px) {
  .flex.items-center.justify-start.w-full.md\:w-auto {
    justify-content: space-between;
  }
}
</style>
