import { useThemeContext } from "../../theme/themeContext";
import Heading from "../../common/heading";
import CodeComponent from "../../common/codeComponent";
import { HeadingType } from "../../enums/heading.interface";

const ArticleDetail = () => {
  const { isDarkMode } = useThemeContext();
  const codeSnippet = `import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/hello")
    public String hello() {
        return "Hello from Spring Boot";
    }
}`;
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h1
        className={`mb-4 pt-10 text-center text-3xl sm:text-4xl font-bold leading-tight ${isDarkMode ? "text-gray-200" : "text-gray-900"}`}
      >
        Spring Boot is a framework
      </h1>

      <p
        className={`mb-4 text-lg ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}
      >
        Spring Boot is a framework built on top of Spring Framework that makes
        it easier to create production-ready Java applications quickly. It is
        commonly used for building REST APIs and backend services.
      </p>

      <img
        src="https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800&h=600&fit=crop"
        alt="main-image"
        className="w-full h-40 md:h-80 lg:h-100 object-cover rounded-2xl mb-6"
      />

      <p
        className={`mb-4 text-lg ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}
      >
        Spring Boot is a framework built on top of Spring Framework that makes
        it easier to create production-ready Java applications quickly. It is
        commonly used for building REST APIs and backend services.
      </p>

      <Heading type={HeadingType.h2}>What Spring Boot Does</Heading>

      <p
        className={`mb-4 text-lg ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}
      >
        Spring Boot reduces the amount of configuration needed to start a Java
        backend application.
      </p>

      <p
        className={`mb-2 text-lg ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}
      >
        Main goals:
      </p>

      <ul
        className={`list-disc text-lg list-inside ${isDarkMode ? "text-gray-300" : "text-gray-800"}`}
      >
        <li>
          Create <strong>standalone applications</strong>
        </li>
        <li>
          <strong>Auto-configuration</strong> so you write less setup code
        </li>
        <li>
          Run apps using an <strong>embedded server</strong> (no need to install
          Tomcat separately)
        </li>
        <li>
          Quickly build <strong>REST APIs</strong>
        </li>
      </ul>

      <Heading type={HeadingType.h2}>Key Features</Heading>
      <ul
        className={`list-decimal text-lg list-inside ${isDarkMode ? "text-gray-300" : "text-gray-800"}`}
      >
        <li>
          <strong>Auto configuration</strong>
          {/* <br /> */}
          <p className="ml-4.5 text-base">
            Automatically configures your application based on dependencies.
          </p>
        </li>

        <li className="mt-2">
          <strong>Embedded Servers</strong>
          {/* <br /> */}
          <p className="ml-4.5 text-base">Includes servers like:</p>
          <ul className="ml-4.5 text-base list-inside mt-1 list-disc">
            <li>Apache Tomcat</li>
            <li>Jetty</li>
          </ul>
        </li>

        <li className="mt-2">
          <strong>Starter Dependencies</strong>
          {/* <br /> */}
          <p className="ml-4.5 text-base mt-1">
            Predefined dependency groups like:
          </p>
          <ul className="ml-4.5 text-base list-inside mt-1 list-disc">
            <li>
              <code>spring-boot-starter-web</code>
            </li>
            <li>
              <code>spring-boot-starter-data-jpa</code>
            </li>
          </ul>
        </li>

        <li className="mt-2">
          <strong>Production Ready Tools</strong>
          {/* <br /> */}
          <p className="ml-4.5 text-base mt-1">
            Monitoring and health checks via Spring Boot Actuator.
          </p>
        </li>
      </ul>

      <Heading type={HeadingType.h2}>Simple example</Heading>

      <CodeComponent codeLang="Java" content={codeSnippet} />
    </section>
  );
};

export default ArticleDetail;
