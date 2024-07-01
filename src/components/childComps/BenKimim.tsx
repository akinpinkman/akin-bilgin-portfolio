import { Iletisim } from "./Iletisim";

export function BenKimim() {
  return (
    <section className="flex md:px-[150px] pb-[100px]">
      <div className="flex flex-col px-10  items-center">
        <h1 className="flex justify-center pb-10 text-4xl font-bold">
          BEN KİMİM?
        </h1>
        <img
          className="rounded-lg pb-20"
          src="https://i.hizliresim.com/prsu7aj.jpg"
          alt="Akın Bilgin"
          width={500}
        />

        <article className="">
          <p>Merhabalar!</p>
          <br />
          <br />
          <p>
            Ben Akın Bilgin, bilgiye aç olan ve kendini sürekli geliştirmeye
            adamış bir Frontend Developer'ım. Bülent Ecevit Üniversitesi İngiliz
            Dili ve Edebiyatı bölümünden mezun oldum ve şuanda Anadolu
            Üniversitesinde Yönetim Bilişim Sistemleri eğitimi almaktayım. 2
            yılı aşkın bir süredir yazılım alanında kendimi durmadan eğitiyor,
            günlük sorunlarımı çözen ve üretme açlığımı dindiren projeler
            geliştiriyorum. Teknolojiler kısmında şuanda bildiğim ve kullandığım
            dilleri (frameworkleri) görebilirsiniz. Orada gördüklerinizin
            dışında Typescript ve Jest teknolojilerini öğrenmekte oldukça
            hevesliyim. Önceki çalıştığım şirketlerdeki çalışma arkadaşlarımla
            İngilizce iletişim kurmamıza rağmen ortaya harika bir takım
            çalışması koyabiliyorduk.
          </p>
          <br />
          <br />
          <p>
            Bu yüzden elbette klişe gelecek ancak benim için her zaman takım
            çalışması ve iletişim birçok şeyin önünde gelmektedir. Bundan önce
            çalıştığım iş yerlerinde de edindiğim tek kriter buydu diyebilirim.
            Öğrenmekten ve üzerime yerinde sorumluluk almaktan çekinmeyen
            birisiyim. Gelecek sorunları öngörebilir ve buna göre çözümler
            üretebilirim. Bütün bunların dışında iş dünyasında sıkca kullanılan
            Slack, Discord, Trello, Asana, Jira, ve ClickUp gibi uygulamalara
            oldukça hakimim.
          </p>
          <br />
          <br />
          <p>
            Umarım birlikte çalışabiliriz. En kısa sürede görüşmek üzere 👋.
          </p>
        </article>
        <Iletisim />
      </div>
    </section>
  );
}
